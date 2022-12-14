import { useState } from "react";
import FilterBar from "../components/FilterBar";
import ListCharacters from "../components/ListCharacters";

import { Gender, Status } from "../types/Characters";
import useCharacters from "./useCharacters";

const SearchCaracters = () => {
  const [filters, setFilters] = useState<{
    status?: Status;
    gender?: Gender;
  }>();

  const { loading, characters } = useCharacters({ ...filters });

  return (
    <>
    <h2> Sem React-Query</h2>

      <FilterBar
        onChangeFilters={(status, gender) => setFilters({ status, gender })}
      />
      <ListCharacters loading={loading} characters={characters} />
    </>
  );
};

export default SearchCaracters;
