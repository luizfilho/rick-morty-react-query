import axios from "../../config/api";
import { User } from "./types";

export async function login(user: { userName: string; password: string }) {
  const response = await axios.post<User>("/auth/login");

  return response.data;
}
