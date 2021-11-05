import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServerInput } from '../dto/servers/create-server.input';
import { UpdateServerInput } from '../dto/servers/update-server.input';
import { Server } from '../entities/Server.entity';

@Injectable()
export class ServersService {
  constructor(
    @InjectRepository(Server) private serversRepository: Repository<Server>,
  ) {}

  async createServer(input: CreateServerInput) {
    const existingServer = await this.serversRepository.findOne({
      serverName: input.serverName,
    });
    if (existingServer) throw new Error('Server already exists');
    const newServer = await this.serversRepository.create(input);
    return this.serversRepository.save(newServer);
  }

  async addTagsToServer(id: string, tags: string[]): Promise<Server> {
    const server = await this.serversRepository.findOne(id);

    return this.serversRepository.save(server);
  }

  async getServers(): Promise<Server[]> {
    return await this.serversRepository.find();
  }

  async getServer(id: string): Promise<Server> {
    return await this.serversRepository.findOneOrFail(id);
  }

  async updateServer(id: string, input: UpdateServerInput): Promise<Server> {
    const server = await this.serversRepository.findOneOrFail(id);
    if (!server) throw new Error('Server not found');
    await this.serversRepository.update(id, { ...input });
    return await this.serversRepository.findOne(id);
  }

  async deleteServer(id: string): Promise<Server> {
    const server = await this.serversRepository.findOneOrFail(id);
    return this.serversRepository.remove(server);
  }
}
