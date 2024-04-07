/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Admin } from "../../admin/base/Admin";
import { Supervisor } from "../../supervisor/base/Supervisor";
import { Repair } from "../../repair/base/Repair";
import { Report } from "../../report/base/Report";

@ObjectType()
class RepairSchedule {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  time!: Date;

  @ApiProperty({
    required: false,
    type: () => Admin,
  })
  @ValidateNested()
  @Type(() => Admin)
  @IsOptional()
  admin?: Admin | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [Supervisor],
  })
  @ValidateNested()
  @Type(() => Supervisor)
  @IsOptional()
  supervisors?: Array<Supervisor>;

  @ApiProperty({
    required: false,
    type: () => [Repair],
  })
  @ValidateNested()
  @Type(() => Repair)
  @IsOptional()
  repairs?: Array<Repair>;

  @ApiProperty({
    required: false,
    type: () => [Report],
  })
  @ValidateNested()
  @Type(() => Report)
  @IsOptional()
  report?: Array<Report>;
}

export { RepairSchedule as RepairSchedule };