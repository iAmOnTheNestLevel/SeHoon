import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config/config.module';
import { PostModule } from './modules/post/post.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigurationModule, PrismaModule, UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
