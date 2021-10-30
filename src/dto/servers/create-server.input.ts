import { InputType, Field } from '@nestjs/graphql';

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
  gameID: string;
}
