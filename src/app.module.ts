import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from '../ormconfig';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
