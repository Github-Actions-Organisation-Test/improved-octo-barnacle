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
import { RepairWhereUniqueInput } from "./RepairWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RepairUpdateInput } from "./RepairUpdateInput";

@ArgsType()
class UpdateRepairArgs {
  @ApiProperty({
    required: true,
    type: () => RepairWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepairWhereUniqueInput)
  @Field(() => RepairWhereUniqueInput, { nullable: false })
  where!: RepairWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RepairUpdateInput,
  })
  @ValidateNested()
  @Type(() => RepairUpdateInput)
  @Field(() => RepairUpdateInput, { nullable: false })
  data!: RepairUpdateInput;
}

export { UpdateRepairArgs as UpdateRepairArgs };
