import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async createUser(createUserDto: any) {
    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);
    console.log('NewUser', newUser);
    return await this.userRepository.save(newUser);
  }
}
