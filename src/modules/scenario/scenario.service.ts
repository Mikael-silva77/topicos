/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { ListScenarioUseCase } from './use-cases/list-scenario.use-case';

@Injectable()
export class ScenarioService {
   constructor(private readonly createSceanrioUseCase: CreateScenarioUseCase, private readonly listscenarioUseCase: ListScenarioUseCase) {}

  create(data: CreateScenarioDto) {
    return this.createSceanrioUseCase.execute(data);
  }

  findAll() {
    return this.listscenarioUseCase.list();
  }

  findOne(id: number) {
    return `This action returns a #${id} scenario`;
  }

  update(id: number, updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
