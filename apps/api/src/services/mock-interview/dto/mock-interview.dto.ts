import { IsEnum, IsIn, IsNotEmpty, IsString } from "class-validator";
import { Status } from "../schema/mock-interview.model";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMockInterviewDto {
  @ApiProperty({
    description: "User ID who is requesting the mock interview",
    example: "user12345",
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: "Instructor ID assigned to the mock interview",
    example: "instructor67890",
  })
  @IsString()
  @IsNotEmpty()
  instructorId: string;
}


export class UpdateMockInterviewStatusDto {
  @ApiProperty({
    description: "ID of the mock interview request",
    example: "request12345",
  })
  @IsString()
  @IsNotEmpty()
  requestId: string;

  @ApiProperty({
    description: "New status of the mock interview request",
    example: "ACCEPTED",
    enum: Status,
  })
  @IsEnum(Status)
  status: Status;
}

export class UpdateRequestStatusDto {
  @ApiProperty({
    description: 'Request ID of the mock interview',
    example: '64b74e12f4d124abcd56789',
  })
  @IsString()
  @IsNotEmpty()
  requestId: string;

  @ApiProperty({
    description: 'Status of the request (ACCEPTED or REJECTED)',
    example: 'ACCEPTED',
  })
  @IsEnum(Status)
  status: Status;
}