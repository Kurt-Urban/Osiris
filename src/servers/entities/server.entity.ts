import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Server {
  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field()
  serverName: string;

  @Column()
  @Field()
  ownerID: string;
}
