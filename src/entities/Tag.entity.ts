import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServerTag } from './ServerTag.entity';

@Entity({ schema: 'public', name: 'tag' })
@ObjectType()
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  value: string;

  @Column()
  @Field()
  label: string;

  @OneToMany(() => ServerTag, (st) => st.tag)
  @Field(() => [ServerTag], { nullable: true })
  servers?: Promise<ServerTag[]>;
}
