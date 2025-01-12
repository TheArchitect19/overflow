import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    description: 'First name of the user',
    example: 'Ayush',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
    example: 'Kumar',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Batch of the user',
    example: '2025',
  })
  @IsNotEmpty()
  @IsString()
  batch: string;

  @ApiProperty({
    description: 'College of the user',
    example: 'IIT Delhi',
  })
  @IsNotEmpty()
  @IsString()
  college: string;

  @ApiProperty({
    description: 'Short bio of the user (optional)',
    example: 'Aspiring software engineer passionate about web development.',
    required: false,
  })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({
    description: 'LinkedIn profile URL of the user (optional)',
    example: 'https://linkedin.com/in/ayushkumar',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  linkedinProfile?: string;

  @ApiProperty({
    description: 'Profile image URL of the user (optional)',
    example: 'https://example.com/images/ayush.png',
    required: false,
  })
  @IsOptional()
  @IsString()
  profileImage?: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'ayush.kumar@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password for the user account',
    example: 'securepassword123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}


export class LoginUserDto {
  @ApiProperty({
    description: 'Email address of the user',
    example: 'ayush.kumar@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password for the user account',
    example: 'securepassword123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}