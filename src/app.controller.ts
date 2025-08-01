// src/app.controller.ts
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  redirectToDocs(@Res() res: Response) {
    return res.redirect('/docs');
  }
}
