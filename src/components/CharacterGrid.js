import React from "react";
import Spinner from "./Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((it) => (
        <h1 key={it.char_id}>{it.name}</h1>
      ))}
    </section>
  );
};

export default CharacterGrid;
