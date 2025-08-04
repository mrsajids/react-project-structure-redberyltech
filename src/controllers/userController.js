import { fetchUsers } from '../service/api/userApi';

export const getUsers = async () => {
  try {
    const users = await fetchUsers();
    return users;
  } catch (error) {
    return [];
  }
};
