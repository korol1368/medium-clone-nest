import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async createUser(createUserDto: any) {
    return createUserDto;
  }
}
