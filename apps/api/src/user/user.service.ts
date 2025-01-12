import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.model';
import { RegisterUserDto, LoginUserDto} from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    const { email, password, ...rest } = registerUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.userModel({
      ...rest,
      email,
      password: hashedPassword,
    });

    return newUser.save();
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<User> {
    const { email, password } = loginUserDto;
    const user = await this.userModel.findOne({ email }).exec();

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }

}
