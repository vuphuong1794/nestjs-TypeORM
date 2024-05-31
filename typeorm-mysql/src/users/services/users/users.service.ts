/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    // khai bao typeorm module trong user module de dung user repository
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }
  CreateUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }
}
