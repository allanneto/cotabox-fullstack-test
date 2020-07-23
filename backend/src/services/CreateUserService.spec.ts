import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

import AppError from '../errors/AppError';

describe('Create User', () => {
  it('should be able to create new User', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);

    const user = await createUser.execute({
      first_name: 'Keilad',
      last_name: 'Guerreira',
      participation: 50,
    });

    expect(user).toHaveProperty('id');
  });
});
