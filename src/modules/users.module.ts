import { Module } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UsersResolver } from '../resolvers/users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/User.entity';
import { ServersModule } from 'src/modules/servers.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ServersModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
