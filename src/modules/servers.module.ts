import { Module } from '@nestjs/common';
import { ServersService } from '../service/servers.service';
import { ServersResolver } from '../resolvers/servers.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Server } from '../entities/Server.entity';
import { TagsModule } from './tags.module';
import { ServerTagsModule } from './servertags.module';

@Module({
  imports: [TypeOrmModule.forFeature([Server]), TagsModule, ServerTagsModule],
  providers: [ServersResolver, ServersService],
  exports: [ServersService],
})
export class ServersModule {}
