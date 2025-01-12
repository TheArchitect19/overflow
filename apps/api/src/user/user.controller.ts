import {
  Body,
  Controller,
  Post,
  Patch,
  UseGuards,
  Req,
  Res,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { RegisterUserDto, LoginUserDto} from './dto/user.dto';
import { Response } from 'express';
import { MockInterviewService } from 'src/services/mock-interview/mock-interview.service';
import { CreateMockInterviewDto } from 'src/services/mock-interview/dto/mock-interview.dto';
import OK from 'response/Ok';
import errorHandler from 'http/httpErrorHandler';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly mockInterviewService: MockInterviewService
  ) { }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  async register(@Body() registerUserDto: RegisterUserDto, @Res() res: Response) {
    try {
      const user = await this.userService.registerUser(registerUserDto);
      return res.status(HttpStatus.CREATED).json({ message: 'User registered successfully', user });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
    }
  }

  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiResponse({ status: 200, description: 'User logged in successfully' })
  async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    try {
      const user = await this.userService.loginUser(loginUserDto);
      return res.status(HttpStatus.OK).json({ message: 'Login successful', user });
    } catch (error) {
      return res.status(HttpStatus.UNAUTHORIZED).json({ message: error.message });
    }
  }

  @Post('request-interview')
  @ApiOperation({
    summary: 'Request a mock interview',
    description: 'User requests an interview with an instructor.',
  })
  async requestMockInterview(
    @Res() res: Response,
    @Body() createMockInterviewDto: CreateMockInterviewDto,
  ) {
    try {
      const data = await this.mockInterviewService.createRequest(createMockInterviewDto);
      return OK(res, 'Success', data, HttpStatus.CREATED);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  @Delete('cancel-interview')
  @ApiOperation({
    summary: 'Cancel a mock interview request',
    description: 'User cancels a previously requested interview.',
  })
  async cancelMockInterview(@Res() res: Response, @Body('requestId') requestId: string) {
    try {
      const data = await this.mockInterviewService.remove(requestId);
      return OK(res, 'Success', data, HttpStatus.OK);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}
