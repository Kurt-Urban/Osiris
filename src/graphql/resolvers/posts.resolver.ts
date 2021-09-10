import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from '../../service/posts.service';
import { Post } from '../../dto/entities/post.entity';
import { CreatePostInput } from '../../dto/create-post.input';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private postService: PostsService) {}

  @Query((returns) => [Post])
  posts(): Promise<Post[]> {
    return this.postService.findAll();
  }
  @Mutation((returns) => Post)
  createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postService.createPost(createPostInput);
  }
}
