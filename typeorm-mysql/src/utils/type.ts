export type CreateUserParams = {
  username: string;
  password: string;
};

export type updateUserParams = {
  username: string;
  password: string;
};

export type CreateUserProfileParams = {
  firstname: string;
  lastname: string;
  age: number;
  dob: string;
};

export type CreateUserPostParams = {
  title: string;
  desc: string;
};
