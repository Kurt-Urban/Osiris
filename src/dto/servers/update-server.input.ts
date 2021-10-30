import { CreateServerInput } from './create-server.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateServerInput extends PartialType(CreateServerInput) {
  @Field()
  serverName: string;

  @Field()
  ipAddress: string;

  @Field()
  bannerURL: string;

  @Field()
  gameID: string;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  tags: '[String]';
}
