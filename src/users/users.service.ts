import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { USERS_REPOSITORY } from '../constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private userRepository: typeof User,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOne(id: string): Promise<User | undefined> {
    console.log(await this.userRepository.findAll());
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
