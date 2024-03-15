import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';

describe('GuardGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard(new JwtService(), new Reflector())).toBeDefined();
  });
});
