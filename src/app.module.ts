import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from '../ormconfig';
import { UsersModule } from './modules/users.module';
import { ServersModule } from './modules/servers.module';
import { TagsModule } from './modules/tags.module';
import { ServerTagsModule } from './modules/servertags.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(ormConfig),
    UsersModule,
    ServersModule,
    TagsModule,
    ServerTagsModule,
  ],
})
export class AppModule {}
