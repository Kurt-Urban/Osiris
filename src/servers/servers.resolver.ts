import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ServersService } from './servers.service';
import { Server } from './entities/server.entity';
import { CreateServerInput } from './dto/create-server.input';
import { UpdateServerInput } from './dto/update-server.input';

@Resolver(() => Server)
export class ServersResolver {
  constructor(private readonly serversService: ServersService) {}

  @Mutation(() => Server)
  createServer(
    @Args('createServerInput') createServerInput: CreateServerInput,
  ) {
    return this.serversService.createServer(createServerInput);
  }

  @Query(() => [Server])
  getServers() {
    return this.serversService.getServers();
  }

  @Query(() => Server, { name: 'server' })
  getServer(@Args('id') id: string) {
    return this.serversService.getServer(id);
  }

  @Mutation(() => Server)
  updateServer(
    @Args('updateServerInput') updateServerInput: UpdateServerInput,
  ) {
    return this.serversService.update(updateServerInput.id, updateServerInput);
  }

  @Mutation(() => Server)
  removeServer(@Args('id') id: string) {
    return this.serversService.remove(id);
  }
}
