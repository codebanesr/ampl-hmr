/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsJSON } from "class-validator";
import { PrescriptionCreateNestedManyWithoutUsersInput } from "./PrescriptionCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: () => PrescriptionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PrescriptionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  prescriptionDoctor?: PrescriptionCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => PrescriptionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PrescriptionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PrescriptionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  prescriptionPatient?: PrescriptionCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSONObject)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };