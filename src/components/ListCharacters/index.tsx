import React from "react";
import { Result as Characters } from "../../types/Characters";

const ListCharacters = ({
  characters,
  loading,
}: {
  characters?: Characters[];
  loading: boolean;
}) => {
  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <div className="characters-container">
        {characters?.map((character) => {
          return (
            <div className="characterCard" key={character.id}>
              <img
                src={character.image}
                alt="Character Image"
                className="character-image"
              />
              {character.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCharacters;
