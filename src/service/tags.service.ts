import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from 'src/entities/Tag.entity';
import { Repository } from 'typeorm';
import { CreateTagInput } from '../dto/tags/create-tag.input';
import { UpdateTagInput } from '../dto/tags/update-tag.input';

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tag) private tagsRepository: Repository<Tag>) {}

  async createTag(input: CreateTagInput) {
    const newTag = await this.tagsRepository.create(input);
    return this.tagsRepository.save(newTag);
  }

  async getTags(): Promise<Tag[]> {
    return this.tagsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, input: UpdateTagInput) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
