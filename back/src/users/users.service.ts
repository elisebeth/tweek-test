import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers(): Promise<Omit<User, 'createdAt' | 'updatedAt'>[]> {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        title: true,
        subtitle: true,
        avatar: true,
        score: true,
        country: true
      }
    })
  }

  async getCountries(): Promise<Pick<User, 'country'>[]> {
    const countries = await this.prisma.user.findMany({
      select: {
        country: true
      }
    })

    const filteredCountries = [...(new Set(countries))]

    return filteredCountries;
  }
}

