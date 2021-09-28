import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { ServersService } from './servers.service';
import { Server } from './entities/server.entity';
import { CreateServerInput } from './dto/create-server.input';
import { UpdateServerInput } from './dto/update-server.input';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Server)
export class ServersResolver {
  constructor(private readonly serversService: ServersService) {}

  @ResolveField((returns) => User)
  owner(@Parent() server: Server): Promise<User> {
    return this.serversService.getOwner(server.ownerID);
  }

  @Query(() => [Server])
  getServers() {
    return this.serversService.getServers();
  }

  @Query(() => Server)
  getServer(@Args('id') id: string) {
    return this.serversService.getServer(id);
  }

  @Mutation(() => Server)
  createServer(@Args('data') data: CreateServerInput) {
    return this.serversService.createServer(data);
  }

  @Mutation(() => Server)
  updateServer(@Args('id') id: string, @Args('data') data: UpdateServerInput) {
    return this.serversService.updateServer(id, data);
  }

  @Mutation(() => Server)
  deleteServer(@Args('id') id: string) {
    return this.serversService.deleteServer(id);
  }
}
