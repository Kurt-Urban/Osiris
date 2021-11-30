import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateServerInput {
  @Field()
  serverName: string;

  @Field()
  ownerID: string;

  @Field()
  ipAddress: string;

  @Field()
  bannerURL: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  status: string;

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
