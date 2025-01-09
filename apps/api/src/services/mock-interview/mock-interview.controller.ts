import { Controller, Post, Patch, Body, Param, Get, Res, HttpStatus, NotFoundException, Delete } from '@nestjs/common';
import { MockInterviewService } from './mock-interview.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import OK from 'response/Ok';
import errorHandler from 'http/httpErrorHandler';
import { Response } from 'express';
import { CreateMockInterviewDto, UpdateMockInterviewStatusDto } from './dto/mock-interview.dto';

@ApiTags('Mock Interviews')
@Controller('mock-interviews')
export class MockInterviewController {
  constructor(private readonly mockInterviewService: MockInterviewService) {}

  @Get('all')
  @ApiOperation({
    summary: 'Get all mock interview requests',
    description: 'Retrieve all mock interview requests.',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns an array of mock interview requests.',
  })
  async findAll(@Res() res: Response) {
    try {
      const data = await this.mockInterviewService.findAll();
      return OK(res, 'Success', data, HttpStatus.OK);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a specific mock interview request',
    description: 'Retrieve a mock interview request by ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the mock interview request.',
  })
  async findOne(@Res() res: Response, @Param('id') id: string) {
    try {
      const data = await this.mockInterviewService.findOne(id);
      if (!data) {
        throw new NotFoundException('Request not found');
      }
      return OK(res, 'Success', data, HttpStatus.OK);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  @Post()
  @ApiOperation({
    summary: 'Create a mock interview request',
    description: 'Create a new mock interview request.',
  })
  @ApiResponse({
    status: 201,
    description: 'Returns the created mock interview request.',
  })
  async create(
    @Res() res: Response,
    @Body() createMockInterviewDto: CreateMockInterviewDto
  ) {
    try {
      const data = await this.mockInterviewService.createRequest(createMockInterviewDto);
      return OK(res, 'Interview Scheduled', data, HttpStatus.CREATED);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update the status of a mock interview request',
    description: 'Update the status of a specific mock interview request to Accepted or Rejected.',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the updated mock interview request.',
  })
  async updateStatus(
    @Res() res: Response,
    @Body() updateMockInterviewStatusDto: UpdateMockInterviewStatusDto
  ) {
    try {
      const data = await this.mockInterviewService.updateStatus(updateMockInterviewStatusDto);
      return OK(res, 'Interview Scheduled', data, HttpStatus.OK);
    } catch (error) {
      return errorHandler(error, res);
    }
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a mock interview request',
    description: 'Remove a specific mock interview request by ID.',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the deleted mock interview request.',
  })
  async remove(@Res() res: Response, @Param('id') id: string) {
    try {
      const data = await this.mockInterviewService.remove(id);
      if (!data) {
        throw new NotFoundException('Request not found');
      }
      return OK(res, 'Success', data, HttpStatus.OK);
    } catch (error) {
      return errorHandler(error, res);
    }
  }
}
