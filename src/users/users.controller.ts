import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './users.dto';

@Controller('api/v1')
export class UsersController {
  constructor(
    @Inject(UsersService)
    private userService: UsersService,
  ) {}

  @Post('add-user')
  async addUser(@Body() body: CreateUserDTO) {
    const { name, password, email } = body;
    console.log(typeof name, typeof password, typeof email);
    if (!name) {
      throw new HttpException(
        'Validation failed. Name must be now empty string', // TODO: properly validate name
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    if (!password) {
      throw new HttpException(
        'Validation failed. Password must be now empty string', // TODO: properly validate password
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    if (!email) {
      throw new HttpException(
        'Validation failed. Email must be now empty string', // TODO: properly validate email
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return await this.userService.createUser(name, password, email);
  }

  @Get('get-user/:id')
  async getUser(@Param('id') id: string) {
    if (Number.isNaN(Number(id)) || Number(id) < 1 || id.includes('.')) {
      throw new HttpException(
        'Validation failed. User id must be an integer',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
