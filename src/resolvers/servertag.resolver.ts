import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateServerTagInput } from 'src/dto/servertag/create-servertag.input';
import { ServerTag } from 'src/entities/ServerTag.entity';
import { ServerTagsService } from 'src/service/servertags.service';

@Resolver(() => ServerTag)
export class ServerTagResolver {
  constructor(private readonly serverTagsService: ServerTagsService) {}

  @Mutation(() => Boolean)
  async createServerTag(@Args('input') input: CreateServerTagInput) {
    await this.serverTagsService.createServerTag(input);
    return true;
  }
  @Query(() => [ServerTag])
  async getServerTags() {
    return await this.serverTagsService.getServerTags();
  }
}
