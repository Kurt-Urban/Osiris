import { ObjectType, Field } from '@nestjs/graphql';
import { Server } from 'src/entities/Server.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Tag } from './Tag.entity';

@Entity({ schema: 'public', name: 'servertag' })
@ObjectType()
export class ServerTag {
  @PrimaryColumn()
  @Field()
  serverID: string;

  @PrimaryColumn()
  @Field()
  tagID: string;

  @ManyToOne(() => Tag, (tag) => tag.servers, { primary: true })
  @JoinColumn({ name: 'tagID', referencedColumnName: 'id' })
  @Field(() => Tag)
  tag?: Promise<Tag>;

  @ManyToOne(() => Server, (server) => server.tags, {
    primary: true,
  })
  @JoinColumn({ name: 'serverID', referencedColumnName: 'id' })
  @Field(() => Server)
  server?: Promise<Server>;
}
