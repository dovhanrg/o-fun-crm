import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from '../public/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login') // TODO:  use a DTO
  signIn(@Body() signInBody: Record<string, any>) {
    if (!signInBody.username || !signInBody.password) {
      throw new HttpException(
        'Validation failed. Enter valid Login and password',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    return this.authService.signIn(signInBody.username, signInBody.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile') // TODO:  use a DTO
  getProfile(@Request() req: Record<string, any>) {
    return req.user;
  }
}
