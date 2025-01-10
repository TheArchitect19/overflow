import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateInstructorDto {
  @ApiProperty({
    description: 'First name of the instructor',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'Last name of the instructor',
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'Current company of the instructor',
    example: 'TechCorp',
  })
  @IsString()
  @IsNotEmpty()
  currentCompany: string;

  @ApiProperty({
    description: 'Short bio of the instructor',
    example: 'Software Engineer with 10 years of experience',
  })
  @IsString()
  @IsNotEmpty()
  bio: string;

  @ApiProperty({
    description: 'Calendly link for scheduling appointments',
    example: 'https://calendly.com/john-doe',
  })
  @IsString()
  @IsNotEmpty()
  calendlyLink: string;

  @ApiProperty({
    description: 'Organization email of the instructor',
    example: 'john.doe@techcorp.com',
  })
  @IsEmail()
  @IsNotEmpty()
  orgEmail: string;

  @ApiProperty({
    description: 'Password for the instructor account',
    example: 'securepassword123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}


export class LoginInstructorDto {
  @ApiProperty({
    description: 'Organization email of the instructor',
    example: 'john.doe@techcorp.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Password for the instructor account',
    example: 'securepassword123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UpdateInstructorDto {
  @ApiProperty({
    description: 'First name of the instructor',
    example: 'John',
    required: false,
  })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    description: 'Last name of the instructor',
    example: 'Doe',
    required: false,
  })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({
    description: 'Current company of the instructor',
    example: 'TechCorp',
    required: false,
  })
  @IsString()
  @IsOptional()
  currentCompany?: string;

  @ApiProperty({
    description: 'Short bio of the instructor',
    example: 'Software Engineer with 10 years of experience',
    required: false,
  })
  @IsString()
  @IsOptional()
  bio?: string;

  @ApiProperty({
    description: 'Calendly link for scheduling appointments',
    example: 'https://calendly.com/john-doe',
    required: false,
  })
  @IsString()
  @IsOptional()
  calendlyLink?: string;

  @ApiProperty({
    description: 'Organization email of the instructor',
    example: 'john.doe@techcorp.com',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  orgEmail?: string;
}