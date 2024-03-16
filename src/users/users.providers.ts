import { User } from './users.model';
import { USERS_REPOSITORY } from '../constants';

export const usersProviders = [
  {
    provide: USERS_REPOSITORY,
    useValue: User,
  },
];
