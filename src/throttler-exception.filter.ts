import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { Request, Response } from 'express'; // ✅ Needed for res & req types

@Catch(HttpException)
export class ThrottlerExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    if (exception.getStatus() === 429) {
      return res.status(429).json({
        statusCode: 429,
        error: 'Too Many Requests',
        message: 'Too many login attempts. Try again in a minute.',
        path: req.url,
        timestamp: new Date().toISOString(),
      });
    }

    return res
      .status(exception.getStatus())
      .json(exception.getResponse());
  }
}
