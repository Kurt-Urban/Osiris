import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServersService } from '../service/servers.service';
import { Server } from '../entities/Server.entity';
import { CreateServerInput } from '../dto/servers/create-server.input';
import { UpdateServerInput } from '../dto/servers/update-server.input';

@Resolver(() => Server)
export class ServersResolver {
  constructor(private readonly serversService: ServersService) {}

  @Query(() => [Server])
  getServers() {
    return this.serversService.getServers();
  }

  @Query(() => Server)
  getServer(@Args('id') id: string) {
    return this.serversService.getServer(id);
  }

  @Mutation(() => Server)
  async createServer(@Args('input') input: CreateServerInput) {
    return await this.serversService.createServer(input);
  }

  @Mutation(() => Server)
  updateServer(
    @Args('id') id: string,
    @Args('input') input: UpdateServerInput,
  ) {
    return this.serversService.updateServer(id, input);
  }

  @Mutation(() => Server)
  deleteServer(@Args('id') id: string) {
    return this.serversService.deleteServer(id);
  }
}
