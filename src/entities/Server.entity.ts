import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/entities/User.entity';
import { ServerTag } from './ServerTag.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'public', name: 'server' })
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

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  ipAddress: string;

  @Column()
  @Field()
  bannerURL: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  trailerURL: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  websiteURL: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  discordURL: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  status: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  listSlot: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  gameVersion: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  country: string;

  @Column('int', { nullable: true })
  @Field(() => Int, { nullable: true })
  port: number;

  @Column('int', { nullable: true })
  @Field(() => Int, { nullable: true })
  playerLikes: number;

  @OneToMany(() => ServerTag, (st) => st.server, { cascade: true })
  @Field(() => [ServerTag], { nullable: true })
  tags?: Promise<ServerTag[]>;

  @ManyToOne(() => User, (user) => user.servers, { cascade: true })
  @JoinColumn({ name: 'ownerID', referencedColumnName: 'id' })
  @Field(() => User)
  owner: Promise<User>;
}
