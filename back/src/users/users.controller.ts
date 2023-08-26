import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  async getUsers(): Promise<Omit<User, 'createdAt' | 'updatedAt'>[]> {
    return await this.usersService.getUsers();
  }

  @Get('/countries')
  async getCountries(): Promise<Pick<User, 'country'>[]> {
    return await this.usersService.getCountries();
  }
}

