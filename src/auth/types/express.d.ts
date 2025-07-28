// src/auth/types/express.d.ts
import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: any; // or type it more strictly if you want: { userId: string } or jwt.JwtPayload
  }
}
