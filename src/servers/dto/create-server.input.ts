import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServerInput {
  @Field()
  id: string;

  @Field()
  serverName: string;

  @Field()
  ownerID: string;
}
