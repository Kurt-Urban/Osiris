import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../service/users.service';
import { User } from '../entities/User.entity';
import { CreateUserInput } from '../dto/users/create-user.input';
import { UpdateUserInput } from '../dto/users/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('input') input: CreateUserInput) {
    return this.usersService.createUser(input);
  }

  @Query(() => [User])
  getUsers() {
    return this.usersService.getUsers();
  }

  @Query(() => User)
  getUser(@Args('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Mutation(() => User)
  updateUser(@Args('id') id: string, @Args('input') input: UpdateUserInput) {
    return this.usersService.updateUser(id, input);
  }

  @Mutation(() => User)
  deleteUser(@Args('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
