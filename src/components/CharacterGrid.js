import React from "react";
import CharacterIem from "./CharacterIem";
import Spinner from "./Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((it) => (
        <CharacterIem key={it.char_id} item={it} />
      ))}
    </section>
  );
};

export default CharacterGrid;
