import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  index(): Promise<User[]>;
}
