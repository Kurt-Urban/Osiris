import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/entities/User.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ServerTag } from './ServerTag.entity';

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

  @Column({ nullable: true })
  @Field({ nullable: true })
  ipAddress: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  bannerURL: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  status: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  gameID: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  listSlot: string;

  @OneToMany(() => ServerTag, (st) => st.server, { cascade: true })
  @Field(() => [ServerTag], { nullable: true })
  tags?: Promise<ServerTag[]>;

  @ManyToOne(() => User, (user) => user.servers, { cascade: true })
  @JoinColumn({ name: 'ownerID', referencedColumnName: 'id' })
  @Field(() => User)
  owner: Promise<User>;
}
