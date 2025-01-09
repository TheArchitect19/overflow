// mock-interview.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MockInterview } from './schema/mock-interview.model';
import { CreateMockInterviewDto, UpdateMockInterviewStatusDto } from './dto/mock-interview.dto';

@Injectable()
export class MockInterviewService {
  constructor(
    @InjectModel(MockInterview.name)
    private readonly mockInterviewModel: Model<MockInterview>,
  ) {}

  // Create a new mock interview request
  async createRequest(
    createMockInterviewDto: CreateMockInterviewDto,
  ): Promise<MockInterview> {
    const { userId, instructorId } = createMockInterviewDto;
    const newRequest = new this.mockInterviewModel({
      user: userId,
      instructor: instructorId,
      status: 'Requested',
    });
    return newRequest.save();
  }

  // Get all mock interview requests
  async findAll(): Promise<MockInterview[]> {
    return this.mockInterviewModel.find()
  }

  // Get a single mock interview request by ID
  async findOne(id: string): Promise<MockInterview | null> {
    const request = await this.mockInterviewModel.findById(id)
    if (!request) {
      throw new NotFoundException(`Request with ID ${id} not found`);
    }
    return request;
  }

  // Update the status of a mock interview request
  async updateStatus(
    updateMockInterviewStatusDto: UpdateMockInterviewStatusDto,
  ): Promise<MockInterview> {
    const { requestId , status } = updateMockInterviewStatusDto;
    const request = await this.mockInterviewModel.findById(requestId).exec();
    if (!request) {
      throw new NotFoundException(`Request with ID ${requestId} not found`);
    }
    request.status = status;
    return request.save();
  }

  // Remove a mock interview request by ID
  async remove(id: string): Promise<MockInterview | null> {
    const request = await this.mockInterviewModel.findByIdAndDelete(id).exec();
    if (!request) {
      throw new NotFoundException(`Request with ID ${id} not found`);
    }
    return request;
  }
}
