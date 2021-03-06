import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServerInput } from 'src/dto/servers/create-server.input';
import { CreateServerTagInput } from 'src/dto/servertag/create-servertag.input';
import { CreateTagInput } from 'src/dto/tags/create-tag.input';
import { Repository } from 'typeorm';
import { ServerTag } from '../entities/ServerTag.entity';
import { ServersService } from './servers.service';
import { TagsService } from './tags.service';

@Injectable()
export class ServerTagsService {
  constructor(
    @InjectRepository(ServerTag)
    private serverTagRepository: Repository<ServerTag>,
  ) {}

  async createServerTag(input) {
    const newServerTag = this.serverTagRepository.create(input);
    await this.serverTagRepository.save(newServerTag);
    return true;
  }

  async getServerTag(serverID: string, tagID: string) {
    const serverTag = await this.serverTagRepository.findOne({
      serverID,
      tagID,
    });
    if (!serverTag) throw new Error('ServerTag not found');
    return serverTag;
  }

  async getServerTagsByServer(serverID: string) {
    return await this.serverTagRepository.find({ where: { serverID } });
  }
  async getServerTagsByTag(tagID: string) {
    return await this.serverTagRepository.find({ where: { tagID } });
  }

  async getServerTags() {
    return await this.serverTagRepository.find();
  }

  async deleteServerTag(serverID: string, tagID: string) {
    return await this.serverTagRepository.delete({ serverID, tagID });
  }
}
