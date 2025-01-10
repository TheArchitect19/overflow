import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UseGuards,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { Response } from 'express';
import { InstructorService } from './instructor.service';
import { CreateInstructorDto, LoginInstructorDto, UpdateInstructorDto } from './dto/instructor.dto';
import { UpdateRequestStatusDto } from 'src/services/mock-interview/dto/mock-interview.dto';
import OK from 'response/Ok';
import errorHandler from 'http/httpErrorHandler';

@ApiTags('Instructors')
@Controller('instructors')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Post('signup')
  @ApiOperation({
    summary: 'Sign up a new instructor',
    description: 'Endpoint to create a new instructor account.',
  })
  @ApiResponse({
    status: 201,
    description: 'Returns the created instructor.',
  })
  async signUp(@Body() createInstructorDto: CreateInstructorDto, @Res() res: Response) {
    try {
      const data = await this.instructorService.signUp(createInstructorDto);
      return OK(res, 'Success', data, HttpStatus.CREATED);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login an instructor',
    description: 'Endpoint for instructor login.',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the instructor details if login is successful.',
  })
  async login(@Body() loginInstructorDto: LoginInstructorDto, @Res() res: Response) {
    try {
      const data = await this.instructorService.login(loginInstructorDto);
      return OK(res, 'Login Success', data, HttpStatus.OK);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  @Get('requests')
  @ApiOperation({
    summary: 'Get requests for the instructor',
    description: 'Retrieve all user requests for the instructor.',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Returns a list of requests.',
  })
  async getRequests(@Req() req, @Res() res: Response) {
    try {
      const instructorId = req.user._id;
      const data = await this.instructorService.getRequests(instructorId);
      return OK(res, 'Success', data, HttpStatus.OK);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  @Patch('requests/status')
  @ApiOperation({
    summary: 'Update status of a request',
    description: 'Accept or reject a user’s request for an interview.',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Returns the updated request.',
  })
  async updateRequestStatus(
    @Body() updateRequestStatusDto: UpdateRequestStatusDto,
    @Res() res: Response,
  ) {
    try {
      const data = await this.instructorService.updateRequestStatus(updateRequestStatusDto);
      return OK(res, 'Success', data, HttpStatus.OK);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  @Patch('profile')
  @ApiOperation({
    summary: 'Edit instructor profile',
    description: 'Update the instructor’s profile details.',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Returns the updated profile.',
  })
  async updateProfile(
    @Body() updateInstructorDto: UpdateInstructorDto,
    @Req() req,
    @Res() res: Response,
  ) {
    try {
      const instructorId = req.user._id;
      const data = await this.instructorService.updateProfile(instructorId, updateInstructorDto);
      return OK(res, 'Success', data, HttpStatus.OK);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}
