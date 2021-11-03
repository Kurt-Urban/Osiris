import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServersService } from '../service/servers.service';
import { Server } from '../entities/Server.entity';
import { CreateServerInput } from '../dto/servers/create-server.input';
import { UpdateServerInput } from '../dto/servers/update-server.input';
import { TagsService } from 'src/service/tags.service';
import { ServerTagsService } from 'src/service/servertags.service';

@Resolver(() => Server)
export class ServersResolver {
  constructor(
    private readonly serversService: ServersService,
    private tagsService: TagsService,
    private serverTagsService: ServerTagsService,
  ) {}

  @Query(() => [Server])
  getServers() {
    return this.serversService.getServers();
  }

  @Query(() => Server)
  getServer(@Args('id') id: string) {
    return this.serversService.getServer(id);
  }

  @Mutation(() => Server)
  async createServer(
    @Args('input') input: CreateServerInput,
    @Args('tags', { type: () => [String] }) tags: string[],
  ) {
    const server = await this.serversService.createServer(input);
    if (tags) {
      tags.map(async (tag: any) => {
        const existingTag = await this.tagsService.getTag(tag, true);
        if (existingTag) {
          return await this.serverTagsService.createServerTag({
            serverID: server.id,
            tagID: existingTag.id,
          });
        }
        const newTag = await this.tagsService.createTag({ value: tag });
        return await this.serverTagsService.createServerTag({
          serverID: server.id,
          tagID: newTag.id,
        });
      });
      return server;
    }
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
