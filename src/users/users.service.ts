import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Server } from 'src/servers/entities/server.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const newUser = await this.usersRepository.create(createUserInput);
    return this.usersRepository.save(newUser);
  }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: string): Promise<User> {
    return await this.usersRepository.findOneOrFail(id);
  }

  async updateUser(id: string, data: UpdateUserInput): Promise<User> {
    const user = await this.usersRepository.findOneOrFail(id);
    if (!user) throw new Error('User not found');
    await this.usersRepository.update(id, data);
    return await this.usersRepository.findOneOrFail(id);
  }

  async deleteUser(id: string) {
    return await this.usersRepository.delete(id);
  }
}
