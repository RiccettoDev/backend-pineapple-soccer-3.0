import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { MatchModule } from './match/match.module';
import { Part2Service } from './part2/part2.service';

@Module({
  imports: [TeamModule, UserModule, GroupModule, MatchModule],
  controllers: [AppController],
  providers: [AppService, Part2Service],
})
export class AppModule {}
