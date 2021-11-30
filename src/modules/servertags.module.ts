import { Module } from '@nestjs/common';
import { ServerTagsService } from '../service/servertags.service';
import { ServerTagResolver } from '../resolvers/servertag.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerTag } from 'src/entities/ServerTag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServerTag])],
  providers: [ServerTagResolver, ServerTagsService],
  exports: [ServerTagsService],
})
export class ServerTagsModule {}
