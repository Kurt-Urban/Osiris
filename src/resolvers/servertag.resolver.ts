import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateServerInput } from 'src/dto/servers/create-server.input';
import { CreateServerTagInput } from 'src/dto/servertag/create-servertag.input';
import { ServerTag } from 'src/entities/ServerTag.entity';
import { ServerTagsService } from 'src/service/servertags.service';

@Resolver(() => ServerTag)
export class ServerTagResolver {
  constructor(private readonly serverTagsService: ServerTagsService) {}

  @Mutation(() => Boolean)
  async createServerTag(
    @Args('input')
    input: CreateServerTagInput,
  ) {
    await this.serverTagsService.createServerTag(input);
    return true;
  }

  @Query(() => [ServerTag])
  async getServerTagsByServer(@Args('serverID') serverID: string) {
    return await this.serverTagsService.getServerTagsByServer(serverID);
  }

  @Query(() => [ServerTag])
  async getServerTagsByTag(@Args('tagID') tagID: string) {
    return await this.serverTagsService.getServerTagsByTag(tagID);
  }

  @Query(() => [ServerTag])
  async getServerTags() {
    return await this.serverTagsService.getServerTags();
  }
}
