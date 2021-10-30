import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagsService } from '../service/tags.service';
import { Tag } from '../entities/Tag.entity';
import { CreateTagInput } from '../dto/tags/create-tag.input';
import { UpdateTagInput } from '../dto/tags/update-tag.input';

@Resolver(() => Tag)
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Mutation(() => Tag)
  async createTag(@Args('input') input: CreateTagInput) {
    return await this.tagsService.createTag(input);
  }

  @Query(() => [Tag])
  getTags() {
    return this.tagsService.getTags();
  }

  @Query(() => Tag, { name: 'tag' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tagsService.findOne(id);
  }

  @Mutation(() => Tag)
  updateTag(@Args('input') input: UpdateTagInput) {
    return this.tagsService.update(input.id, input);
  }

  @Mutation(() => Tag)
  removeTag(@Args('id', { type: () => Int }) id: number) {
    return this.tagsService.remove(id);
  }
}
