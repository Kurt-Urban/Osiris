import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServerInput } from './dto/create-server.input';
import { UpdateServerInput } from './dto/update-server.input';
import { Server } from './entities/server.entity';

@Injectable()
export class ServersService {
  constructor(
    @InjectRepository(Server) private serversRepository: Repository<Server>,
  ) {}

  createServer(createServerInput: CreateServerInput) {
    const newServer = this.serversRepository.create(createServerInput);
    return this.serversRepository.save(newServer);
  }

  getServers() {
    return this.serversRepository.find();
  }

  getServer(id: string) {
    return this.serversRepository.findOneOrFail(id);
  }

  update(id: string, updateServerInput: UpdateServerInput) {
    return `This action updates a #${id} server`;
  }

  remove(id: string) {
    return `This action removes a #${id} server`;
  }
}
