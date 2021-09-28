import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('data') data: CreateUserInput) {
    return this.usersService.createUser(data);
  }

  @Query(() => [User])
  getUsers() {
    return this.usersService.getUsers();
  }

  @Query((returns) => User)
  getUser(@Args('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Mutation(() => User)
  updateUser(@Args('id') id: string, @Args('data') data: UpdateUserInput) {
    return this.usersService.updateUser(id, data);
  }

  @Mutation(() => User)
  deleteUser(@Args('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
