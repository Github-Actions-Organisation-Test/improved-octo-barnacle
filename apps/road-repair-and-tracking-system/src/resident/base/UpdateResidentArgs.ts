/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResidentWhereUniqueInput } from "./ResidentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ResidentUpdateInput } from "./ResidentUpdateInput";

@ArgsType()
class UpdateResidentArgs {
  @ApiProperty({
    required: true,
    type: () => ResidentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResidentWhereUniqueInput)
  @Field(() => ResidentWhereUniqueInput, { nullable: false })
  where!: ResidentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ResidentUpdateInput,
  })
  @ValidateNested()
  @Type(() => ResidentUpdateInput)
  @Field(() => ResidentUpdateInput, { nullable: false })
  data!: ResidentUpdateInput;
}

export { UpdateResidentArgs as UpdateResidentArgs };
