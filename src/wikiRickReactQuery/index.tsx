import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FilterBar from "../components/FilterBar";
import ListCharacters from "../components/ListCharacters";
import { getCharacters } from "../service/characters";
import { Gender, InfoPagination, Result, Status } from "../types/Characters";

const SearchCaracters = () => {
  const [filters, setFilters] = useState<{
    status?: Status;
    gender?: Gender;
  }>();

  useEffect(() => {
    console.log("COMPONENTE MONTADO");
  }, []);

  const { isLoading, data , refetch} = useQuery<{
    info: InfoPagination;
    results: Result[];
  }>({
    queryKey: ["characters", { ...filters }],
    queryFn: () => getCharacters({ ...filters }),
    
  });

  return (
    <>
      <h2> Com React-Query</h2>
      <span onClick={async () => await refetch()}>Refetch</span>
      <FilterBar
        onChangeFilters={(status, gender) => setFilters({ status, gender })}
      />
      <ListCharacters loading={isLoading} characters={data?.results} />
    </>
  );
};

export default SearchCaracters;
