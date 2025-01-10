import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Instructor } from './schema/instructor.model';
import { MockInterview } from 'src/services/mock-interview/schema/mock-interview.model';
import { UpdateRequestStatusDto } from 'src/services/mock-interview/dto/mock-interview.dto';
import { CreateInstructorDto, LoginInstructorDto, UpdateInstructorDto } from './dto/instructor.dto';


@Injectable()
export class InstructorService {
  constructor(
    @InjectModel(Instructor.name) private readonly instructorModel: Model<Instructor>,
    @InjectModel(MockInterview.name) private readonly requestModel: Model<MockInterview>,
  ) {}


   /**
   * Sign up a new instructor
   * @param createInstructorDto
   * @returns {Promise<Instructor>}
   */
   async signUp(createInstructorDto: CreateInstructorDto): Promise<Instructor> {
    const instructor = new this.instructorModel(createInstructorDto);
    return instructor.save();
  }
  
  async login(loginInstructorDto: LoginInstructorDto): Promise<Instructor> {
    const { email, password } = loginInstructorDto;
  
    const instructor = await this.instructorModel.findOne({ orgEmail: email }).exec();
  
    if (!instructor || instructor.password !== password) {
      throw new UnauthorizedException('Invalid email or password');
    }
  
    return instructor;
  }

  async getRequests(instructorId: string): Promise<MockInterview[]> {
    return await this.requestModel.find({ instructorId }).exec();
  }

  async updateRequestStatus(updateRequestStatusDto: UpdateRequestStatusDto): Promise<MockInterview> {
    const { requestId, status } = updateRequestStatusDto;
    const request = await this.requestModel.findById(requestId).exec();
    if (!request) {
      throw new Error('Request not found');
    }
    request.status = status;
    return request.save();
  }

  async updateProfile(instructorId: string, updateInstructorDto: UpdateInstructorDto): Promise<Instructor> {
    return await this.instructorModel
      .findByIdAndUpdate(instructorId, updateInstructorDto, { new: true })
      .exec();
  }
}
