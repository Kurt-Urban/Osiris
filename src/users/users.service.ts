import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServersService } from 'src/servers/servers.service';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private serversService: ServersService,
  ) {}

  createUser(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(newUser);
  }

  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUser(id: string): Promise<User> {
    return this.usersRepository.findOneOrFail(id);
  }

  updateUser(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  removeUser(id: string) {
    return `This action removes a #${id} user`;
  }

  getServer(id: string) {
    return this.serversService.getServer(id);
  }
}
