import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../dto/entities/post.entity';
import { CreatePostInput } from '../dto/create-post.input';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  createPost(createPostInput: CreatePostInput): Promise<Post> {
    const newPost = this.postsRepository.create(createPostInput);
    return this.postsRepository.save(newPost);
  }

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }
}
