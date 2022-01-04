import React from "react";

const CharacterIem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1> {item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name: </strong>
              {item.portrayed}
            </li>
            <li>
              <strong>NickName: </strong>
              {item.nickname}
            </li>

            <li>
              <strong>Birthdate: </strong>
              {item.birthday}
            </li>
            <li>
              <strong>Status: </strong>
              {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterIem;
