import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServerInput {
  @Field()
  serverName: string;

  @Field()
  ownerID: string;
}
