// src/url/url-redirect.controller.ts
import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';

@Controller('r') // 👈 this defines the /r route prefix
export class UrlRedirectController {
  constructor(private readonly urlService: UrlService) {}

  @Get(':shortCode')
  async redirect(@Param('shortCode') shortCode: string, @Res() res: Response) {
    const found = await this.urlService.findAndIncrementClicks(shortCode);
    if (!found) {
      throw new NotFoundException('Short URL not found');
    }
    return res.redirect(found.url); // 👈 302 redirect
  }
}
