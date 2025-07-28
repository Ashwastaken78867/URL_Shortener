import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Url, UrlSchema } from './url.schema';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { UrlRedirectController } from './url-redirect.controller'; // ✅ Import

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  controllers: [UrlController, UrlRedirectController], // ✅ Include both
  providers: [UrlService],
})
export class UrlModule {}
