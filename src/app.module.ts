import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, ProductModule, PrismaModule,JwtModule.register({
    global: true,
    secret: "secret", 
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
