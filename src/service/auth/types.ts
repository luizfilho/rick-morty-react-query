enum Gender {
  FEMALE = "female",
  MALE = "male",
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  image: string;
  token: string;
}
