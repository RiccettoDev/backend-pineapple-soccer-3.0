/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamDto } from './dto/team.dto';

@Controller('team')
export class TeamController {

  constructor (private readonly teamService: TeamService) {};

  @Post()
  async create(@Body() data: TeamDto) {
    return this.teamService.create(data);
  };

  @Get()
  async findAll() {
    return this.teamService.findAll();
  };

  @Get(":id")
  async findTeamById(@Param("id") id: number){
    return this.teamService.findTeamById(Number(id));
  };

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: TeamDto) {
    return this.teamService.update(Number(id), data);
  };

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return this.teamService.delete(Number(id));
  };
  
}
