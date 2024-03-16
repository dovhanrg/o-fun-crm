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

  async createUser(name: string, password: string, email: string) {
    return await this.userRepository.create({
      name,
      password,
      email,
    });
  }

  async findUserByName(name: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: {
        name,
      },
    });
  }

  async findOne(id: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
}
