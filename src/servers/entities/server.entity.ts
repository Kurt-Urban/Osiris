import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Server {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  serverName: string;

  @Column()
  @Field()
  ownerID: string;

  @ManyToOne(() => User, (user) => user.servers)
  @JoinColumn({ name: 'ownerID', referencedColumnName: 'id' })
  @Field((type) => User)
  owner: Promise<User>;
}
