import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import axios from "axios";
import Search from "./components/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      //console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchAll();
  }, []);
  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchCharacter();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={setQuery} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
