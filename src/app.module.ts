// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

import { UrlModule } from './url/url.module';
import { UrlRedirectController } from './url/url-redirect.controller';
import { UrlController } from './url/url.controller';
import { UrlService } from './url/url.service';
import { Url, UrlSchema } from './url/url.schema';

import { AuthModule } from './auth/auth.module';
import { User, UserSchema } from './auth/user.schema';
import { AppController } from './app.controller'; // ✅ include controller

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRoot(process.env.MONGODB_URI!, {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('✅ MongoDB connected!');
        });
        connection.on('error', (err) => {
          console.error('❌ MongoDB connection error:', err);
        });
        return connection;
      },
    }),

    MongooseModule.forFeature([
      { name: Url.name, schema: UrlSchema },
      { name: User.name, schema: UserSchema },
    ]),

    ThrottlerModule.forRoot([
      {
        name: 'login',
        ttl: 60_000,
        limit: 10,
      },
      {
        name: 'register',
        ttl: 60_000,
        limit: 5,
      },
    ]),

    UrlModule,
    AuthModule,
  ],

  controllers: [AppController, UrlController, UrlRedirectController],

  providers: [
    UrlService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
