import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateServerInput } from './dto/create-server.input';
import { UpdateServerInput } from './dto/update-server.input';
import { Server } from './entities/server.entity';

@Injectable()
export class ServersService {
  constructor(
    @InjectRepository(Server) private serversRepository: Repository<Server>,
    private usersService: UsersService,
  ) {}

  async createServer(input: CreateServerInput) {
    const newServer = await this.serversRepository.create(input);
    return this.serversRepository.save(newServer);
  }

  async getServers(): Promise<Server[]> {
    return await this.serversRepository.find();
  }

  async getServer(id: string): Promise<Server> {
    return await this.serversRepository.findOneOrFail(id);
  }

  async updateServer(id: string, data: UpdateServerInput): Promise<Server> {
    const server = await this.serversRepository.findOneOrFail(id);
    return this.serversRepository.save(server);
  }

  async deleteServer(id: string): Promise<Server> {
    //cascade deletes
    const server = await this.serversRepository.findOneOrFail(id);
    return this.serversRepository.remove(server);
  }

  async getOwner(id: string): Promise<User> {
    return await this.usersService.getUser(id);
  }
}
