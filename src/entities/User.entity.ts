import { Field, ObjectType } from '@nestjs/graphql';
import { Server } from 'src/entities/Server.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn()
  @Field()
  id: string;

  @Column()
  @Field({ nullable: true })
  email: string;

  @Column()
  @Field()
  role: string;

  @Column()
  @Field({ nullable: true })
  firstName: string;

  @Column()
  @Field({ nullable: true })
  lastName: string;

  @OneToMany(() => Server, (server) => server.owner)
  @Field(() => [Server], { nullable: true })
  servers?: Promise<Server[]>;
}
