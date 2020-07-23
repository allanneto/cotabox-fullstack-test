import { Repository, getRepository } from 'typeorm';

import User from '../models/User';
import IUsersRepository from './IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

import AppError from '../errors/AppError';

class UserRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    first_name,
    last_name,
    participation,
  }: ICreateUserDTO): Promise<User> {
    if (!first_name || !last_name || !participation) {
      throw new AppError('Validation Fails');
    }

    const user = this.ormRepository.create({
      first_name,
      last_name,
      participation,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async index(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }
}

export default UserRepository;
