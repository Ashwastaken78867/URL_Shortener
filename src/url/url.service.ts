// src/url/url.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url, UrlDocument } from './url.schema';
// import { nanoid } from 'nanoid';
const { nanoid } = require('nanoid');


@Injectable()
export class UrlService {
  constructor(
    @InjectModel(Url.name) private readonly urlModel: Model<UrlDocument>,
  ) {}

  // async createShortUrl(originalUrl: string, customCode?: string): Promise<Url> {
  async createShortUrl(originalUrl: string, customCode?: string, userId?: string): Promise<Url>{

    let shortCode = customCode;

    if (shortCode) {
      const exists = await this.urlModel.findOne({ shortCode });
      if (exists) {
        throw new ConflictException('Custom code is already in use');
      }
    } else {
      do {
        shortCode = nanoid(6);
      } while (await this.urlModel.findOne({ shortCode }));
    }

    const newUrl = new this.urlModel({
      url: originalUrl,
      shortCode,
        user: userId, // 👈 store user association

    });

    return newUrl.save();
  }

  async findByShortCode(shortCode: string): Promise<Url | null> {
    return this.urlModel.findOne({ shortCode }).exec();
  }

  async findAndIncrementClicks(shortCode: string): Promise<Url | null> {
    return this.urlModel
      .findOneAndUpdate({ shortCode }, { $inc: { clicks: 1 } }, { new: true })
      .exec();
  }
}
