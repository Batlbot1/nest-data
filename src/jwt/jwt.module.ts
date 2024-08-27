import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtService } from './jwt.service';


@Module({
  imports: [
    NestJwtModule.register({
      secret: 'SDJKdfs345sdfdsjGHf7asfdyas89AFY(*sfdf98sdfhds', // Replace with your own secret key
      signOptions: { expiresIn: '15m' }, // Default expiration time for access tokens
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
