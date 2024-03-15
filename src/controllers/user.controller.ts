import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('api/v1')
export class UserController {
  @Post('add-user')
  addUser(): string {
    return 'adding user';
  }

  @Get('get-user/:id')
  getUser(@Param('id') id: string) {
    console.log(typeof id);
    if (Number.isNaN(Number(id)) || Number(id) < 1 || id.includes('.')) {
      throw new HttpException(
        'Validation failed. User id must be an integer',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return 'some user ' + id;
  }
}
