import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTagInput {
  @Field()
  value: string;

  @Field()
  label: string;
}
