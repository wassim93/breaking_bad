import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [searchText, setSearchText] = useState("");
  const onTxtChange = (e) => {
    //console.log(e);
    setSearchText(e.target.value);
    getQuery(e.target.value);
  };
  return (
    <div className="search">
      <form>
        <input
          className="form-control"
          placeholder="Search for Character"
          type="text"
          name="search"
          value={searchText}
          onChange={onTxtChange}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Search;
