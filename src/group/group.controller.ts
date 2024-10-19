
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from './dto/group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) { };

  @Post()
  async create(@Body() data: GroupDto) {
    return this.groupService.create(data);
  };

  @Get()
  async findAll() {
    return this.groupService.findAll();
  };

  @Get(":id")
  async findGroupById(@Param("id") id: number) {
    return this.groupService.findGroupById(Number(id));
  };

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: GroupDto) {
    return this.groupService.update(Number(id), data);
  };

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return this.groupService.delete(Number(id));
  }
}
