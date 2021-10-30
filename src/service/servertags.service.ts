import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServerTagInput } from 'src/dto/servertag/create-servertag.input';
import { Repository } from 'typeorm';
import { ServerTag } from '../entities/ServerTag.entity';

@Injectable()
export class ServerTagsService {
  constructor(
    @InjectRepository(ServerTag)
    private serverTagRepository: Repository<ServerTag>,
  ) {}

  async createServerTag(input: CreateServerTagInput) {
    const newServerTag = await this.serverTagRepository.create(input);
    return this.serverTagRepository.save(newServerTag);
  }

  async getServerTags() {
    return await this.serverTagRepository.find();
  }
}
