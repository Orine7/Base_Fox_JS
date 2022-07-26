import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(
    email: string,
    pass: string
  ): Promise<{ id: string; name: string; email: string } | null> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
