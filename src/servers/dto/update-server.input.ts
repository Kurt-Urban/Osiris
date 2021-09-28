import { CreateServerInput } from './create-server.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateServerInput extends PartialType(CreateServerInput) {
  @Field()
  serverName: string;

  @Field()
  ownerID: string;
}
