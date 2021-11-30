import { InputType, Field } from '@nestjs/graphql';
import { CreateServerInput } from '../servers/create-server.input';

@InputType()
export class CreateServerTagInput {
  @Field()
  serverID: string;

  @Field()
  tagID: string;
}
