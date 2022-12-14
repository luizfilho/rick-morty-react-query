import axios from "../config/api";

import { Gender, InfoPagination, Result, Status } from "../types/Characters";
interface ResponseCharacters {
  info: InfoPagination;
  results: Result[];
}
export async function getCharacters(params: {
  id?: string;
  status?: Status;
  gender?: Gender;
}) {
  const response = await axios.get<ResponseCharacters>("/character", {
    params,
  });
  return response.data;
}
