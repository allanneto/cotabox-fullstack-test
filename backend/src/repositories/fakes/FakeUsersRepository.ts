import { uuid } from 'uuidv4';

import User from '../../models/User';
import IUsersRepository from '../IUsersRepository';
import ICreateUserDTO from '../../dtos/ICreateUserDTO';

import AppError from '../../errors/AppError';

class UserRepository implements IUsersRepository {
  private users: User[] = [];

  public async create({
    first_name,
    last_name,
    participation,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    if (!first_name || !last_name || !participation) {
      throw new AppError('Validation Fails');
    }

    Object.assign(user, {
      id: uuid(),
      first_name,
      last_name,
      participation,
    });

    this.users.push(user);

    return user;
  }

  public async index(): Promise<User[]> {
    return this.users;
  }
}

export default UserRepository;
