import { User } from '../types/User.';
import {PaginationResponse} from '../types/PaginationResponse';

export const getUsers = async (page: number) => {
  const rawUsers = await fetch(
    `https://reqres.in/api/users?page=${page}&per_page=10`,
  );

  const users = await rawUsers.json();

  return users as PaginationResponse<User>;
};
