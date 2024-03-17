import { useState } from "react";

import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import DetailsScreen from "./components/DetailsScreen";

import { chairItems } from "./components/ImagesComponent";
import { tableItems } from "./components/ImagesComponent";
import { sofaItems } from "./components/ImagesComponent";
import { lampItems } from "./components/ImagesComponent";

const furnituresBarArr = [
  { id: 1, description: "Chairs", list: chairItems },
  { id: 2, description: "Tables", list: tableItems },
  { id: 3, description: "Sofas", list: sofaItems },
  { id: 4, description: "Lamps", list: lampItems },
];

export default function App() {
  const [page, setPage] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [list, setList] = useState(chairItems);

  function handlePageChange() {
    setPage(!page);
  }

  function handleClickedItem(theClicked) {
    setClickedItem(theClicked);
    handlePageChange();
  }

  return (
    <div className="app">
      <NavBar />

      <div className="container">
        <HomeScreen
          onClickedItem={handleClickedItem}
          furnituresBarArr={furnituresBarArr}
          list={list}
          setList={setList}
        />
      </div>

      {page && (
        <DetailsScreen
          clickedItem={clickedItem}
          onPageChange={handlePageChange}
          setClickedItem={setClickedItem}
          list={list}
          setList={setList}
        />
      )}
    </div>
  );
}
