import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [TeamModule, UserModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
