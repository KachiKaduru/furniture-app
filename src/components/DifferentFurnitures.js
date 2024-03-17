import { useState } from "react";

export default function DifferentFurnitures({ onClickedItem, furnituresBarArr, list, setList }) {
  const [clicked, setClicked] = useState("Chairs");

  function handleSetClicked(obj) {
    setClicked(obj.description);
    setList(obj.list);
  }

  return (
    <div className="dff-furnitures">
      <FurnituresBar
        clicked={clicked}
        onSetClicked={handleSetClicked}
        furnituresBarArr={furnituresBarArr}
      />
      <FurnitureItems onClickedItem={onClickedItem} list={list} />
    </div>
  );
}

function FurnituresBar({ clicked, onSetClicked, furnituresBarArr }) {
  return (
    <div className="furnitures-bar">
      {furnituresBarArr.map((furniture) => (
        <div
          onClick={() => onSetClicked(furniture)}
          className={clicked === furniture.description ? "clicked" : null}
          key={furniture.description}
        >
          <p>{furniture.description}</p>
        </div>
      ))}
    </div>
  );
}

function FurnitureItems({ list, onClickedItem }) {
  return (
    <div className="furniture-items">
      {list.map((item) => (
        <div className="fur-card" onClick={() => onClickedItem(item)} key={item.id}>
          <div className="img-holder">
            <img src={item.source} alt={item.name} />
          </div>

          <div className="details">
            <p className="item-name">{item.name}</p>
            <p className="item-price">${item.price}.00</p>
          </div>
        </div>
      ))}
    </div>
  );
}
