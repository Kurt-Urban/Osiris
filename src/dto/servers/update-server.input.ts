import { CreateServerInput } from './create-server.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateServerInput extends PartialType(CreateServerInput) {
  @Field({ nullable: true })
  serverName: string;

  @Field({ nullable: true })
  ipAddress: string;

  @Field({ nullable: true })
  bannerURL: string;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  trailerURL: string;

  @Field({ nullable: true })
  websiteURL: string;

  @Field({ nullable: true })
  discordURL: string;

  @Field({ nullable: true })
  listSlot: string;

  @Field({ nullable: true })
  gameVersion: string;

  @Field({ nullable: true })
  country: string;

  @Field(() => Int, { nullable: true })
  port: number;

  @Field(() => Int, { nullable: true })
  playerLikes: number;
}
