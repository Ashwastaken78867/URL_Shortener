// src/url/dto/create-url.dto.ts
import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUrlDto {
  @ApiProperty({
    example: 'https://www.example.com',
    description: 'The original long URL to shorten',
  })
  @IsString()
  url: string;

  @ApiProperty({
    example: 'custom123',
    required: false,
    description: 'Optional custom short code',
  })
  @IsOptional()
  @IsString()
  customCode?: string;
}
