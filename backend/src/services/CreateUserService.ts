import User from '../models/User';
import IUsersRepository from '../repositories/IUsersRepository';

import AppError from '../errors/AppError';

interface Request {
  first_name: string;
  last_name: string;
  participation: number;
}

export default class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    first_name,
    last_name,
    participation,
  }: Request): Promise<User> {
    const user = await this.usersRepository.create({
      first_name,
      last_name,
      participation,
    });

    if (!user) {
      throw new AppError('Failed to create new User');
    }

    return user;
  }
}
