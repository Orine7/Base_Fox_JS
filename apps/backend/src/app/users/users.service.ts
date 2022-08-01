import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserEntity } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newUser = this.userRepo.create(createUserDto)
    return await this.userRepo.save(newUser)
  }

  async findOne(id: string) {
    return await this.userRepo.findOne({ where: { id: id } })
  }

  async findOneByEmail(email: string) {
    return await this.userRepo.findOne({
      where: { email: email },
      select: ['id', 'email', 'password'],
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
