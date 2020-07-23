import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
  const usersRepository = new UsersRepository();

  const users = await usersRepository.index();

  return res.json(users);
});

usersRouter.post('/', async (req, res) => {
  const usersRepository = new UsersRepository();
  const createUser = new CreateUserService(usersRepository);

  const { first_name, last_name, participation } = req.body;

  const user = await createUser.execute({
    first_name,
    last_name,
    participation,
  });

  return res.json(user);
});

export default usersRouter;
