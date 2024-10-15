/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchDto } from './dto/match.dto';

@Controller('match')
export class MatchController {
  constructor (private readonly matchService: MatchService) {};

  @Post()
  async create(@Body() data: MatchDto) {
    return this.matchService.create(data);
  };

  @Get()
  async findAll() {
    return this.matchService.findAll();
  };

  @Get(":id")
  async findMatchById(@Param("id") id: number) {
    return this.matchService.findMatchById(Number(id));
  };

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: MatchDto) {
    return this.matchService.update(Number(id), data);
  };

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return this.matchService.delete(Number(id))
  }
}
