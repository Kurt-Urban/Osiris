import { CreateServerInput } from './create-server.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateServerInput extends PartialType(CreateServerInput) {
  @Field({ nullable: true })
  serverName: string;

  @Field({ nullable: true })
  ipAddress: string;

  @Field({ nullable: true })
  bannerURL: string;

  @Field({ nullable: true })
  gameID: string;

  @Field({ nullable: true })
  status: string;
}
