import { Module } from '@nestjs/common';
import { TagsService } from '../service/tags.service';
import { TagsResolver } from '../resolvers/tags.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from 'src/entities/Tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  providers: [TagsResolver, TagsService],
})
export class TagsModule {}
