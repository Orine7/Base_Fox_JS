import { hash } from 'bcrypt'

import { Role } from '@Base_Fox_JS/helper'
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ select: false })
  password: string

  @Column({ enum: Role, default: Role.User })
  roles: string

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase()
  }

  @BeforeInsert()
  async encryptPassword() {
    this.password = await hash(this.password, 8)
  }
}
