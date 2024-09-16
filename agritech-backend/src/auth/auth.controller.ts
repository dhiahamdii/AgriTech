//import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';
//
// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}
//
//   @Post('register')
//   async register(@Body() body: { username: string; password: string }) {
//     const { username, password } = body;
//     return this.authService.register(username, password);
//   }
//
//   @Post('login')
//   async login(@Body() body: { username: string; password: string }) {
//     const user = await this.authService.validateUser(
//       body.username,
//       body.password,
//     );
//     if (!user) {
//       return { status: 'error', message: 'Invalid credentials' };
//     }
//     return this.authService.login(user);
//   }
//
//   @UseGuards(JwtAuthGuard)
//   @Post('profile')
//   getProfile(@Req() req) {
//     return req.user;
//   }
// }

import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    return this.authService.register(username, password);
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
