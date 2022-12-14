import { useCallback, useEffect, useState } from "react";
import { Result, Gender, Status } from "../types/Characters";
import { getCharacters } from "../service/characters";

export default function useCharacters({
  gender,
  status,
}: {
  gender?: Gender;
  status?: Status;
}) {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<Result[]>();

  const load = useCallback(async () => {
    console.log("Load");
    setLoading(true);
    try {
      const response = await getCharacters({ gender, status });
      setCharacters(response.results);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [gender, status]);

  useEffect(() => {
    console.log("componente montado 🐻");
    load();
  }, [load]);

  return {
    characters,
    loading,
  };
}
