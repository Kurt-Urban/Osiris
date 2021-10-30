import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateServerTagInput {
  @Field()
  serverID: string;

  @Field()
  tagID: string;
}
