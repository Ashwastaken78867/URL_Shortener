// src/url/url.controller.ts
import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Res,
  HttpStatus,
  NotFoundException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { Response, Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller('api')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  // ✅ Apply both guards: JWT + Throttling
  @UseGuards(JwtAuthGuard, ThrottlerGuard)
  @Post('shorten')
  async shorten(
    @Body() createUrlDto: CreateUrlDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const user: any = req.user;

      const saved = await this.urlService.createShortUrl(
        createUrlDto.url,
        createUrlDto.customCode,
        user.id,
      );

      return res.status(HttpStatus.CREATED).json({
        originalUrl: saved.url,
        shortUrl: `http://localhost:3000/r/${saved.shortCode}`,
      });
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ message: error.message || 'Internal Server Error' });
    }
  }

  @UseGuards(JwtAuthGuard, ThrottlerGuard)
  @Get('stats/:shortCode')
  async getStats(@Param('shortCode') shortCode: string, @Res() res: Response) {
    const found = await this.urlService.findByShortCode(shortCode);

    if (!found) {
      throw new NotFoundException('Short code not found');
    }

    return res.status(HttpStatus.OK).json({
      originalUrl: found.url,
      shortUrl: `http://localhost:3000/r/${found.shortCode}`,
      clicks: found.clicks,
      createdAt: found.createdAt,
    });
  }
}
