import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from '../users/users.module'
import { AuthService } from './auth.service'
import { RolesGuard } from './guards/roles.guard'
import { LocalStrategy } from './strategies/local.strategy'

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy, RolesGuard],
  exports: [RolesGuard],
})
export class AuthModule {}
