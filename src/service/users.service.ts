import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from '../dto/users/create-user.input';
import { UpdateUserInput } from '../dto/users/update-user.input';
import { User } from '../entities/User.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const newUser = await this.usersRepository.create(createUserInput);
    const existingUser = await this.usersRepository.findOne({
      googleID: createUserInput.googleID,
    });
    if (existingUser !== undefined) return existingUser;
    return await this.usersRepository.save(newUser);
  }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: string): Promise<User> {
    if (id.includes('-')) return await this.usersRepository.findOneOrFail(id);
    return await this.usersRepository.findOneOrFail({ googleID: id });
  }

  async updateUser(id: string, data: UpdateUserInput): Promise<User> {
    const user = await this.usersRepository.findOneOrFail(id);
    if (!user) throw new Error('User not found');
    await this.usersRepository.update(id, { ...data });
    return await this.usersRepository.findOneOrFail(id);
  }

  async deleteUser(id: string) {
    return await this.usersRepository.delete(id);
  }
}
