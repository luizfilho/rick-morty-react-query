enum Status {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

enum Gender {
  FEMALE = "Female",
  MALE = "Male",
  GENDERLESS = "Genderless",
  UNKNOWN = "unknown",
}

interface Result {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface InfoPagination {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export { Status, Gender };
export type { Result, InfoPagination };
