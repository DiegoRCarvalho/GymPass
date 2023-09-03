import { prisma } from '@/libs/prisma'
import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '@/repositories/users-repository'
/* Quando o Prisma gera a tipagem automática das tabelas ele cria alguns 
tipos que determinam quais são as informações que precisamos enviar
para cada ação. Utilizamos esses tipos para não ficarmos reescrevendo
essa informação. 
Por exemplo: Para criar um usuário ele cria o tipo userCreateInput */

export class PrismaUsersRepository implements UsersRepository {
  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })
    return user
  }
}
