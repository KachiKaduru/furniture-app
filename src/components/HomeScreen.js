import DifferentFurnitures from "./DifferentFurnitures";

import userInfoImg from "../images/others/user-info-img.png";
import searchImg from "../images/icons/search.png";
import settingsImg from "../images/icons/settings.png";

import newItem1 from "../images/others/new-item-1.png";
import newItem2 from "../images/others/new-item-2.png";
import newItem3 from "../images/others/new-item-3.png";
import newItem4 from "../images/others/new-item-4.png";

const newItemsArr = [
  { item: 1, src: newItem1, alt: "new-item-1" },
  { item: 2, src: newItem2, alt: "new-item-2" },
  { item: 3, src: newItem3, alt: "new-item-3" },
  { item: 4, src: newItem4, alt: "new-item-4" },
];

export default function HomeScreen({ onClickedItem, furnituresBarArr, list, setList }) {
  return (
    <div className="home-screen">
      <UserInfo />
      <SearchBar />
      <NewItems />
      <DifferentFurnitures
        onClickedItem={onClickedItem}
        furnituresBarArr={furnituresBarArr}
        list={list}
        setList={setList}
      />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="user-info">
      <img src={userInfoImg} alt="user-info" />
      <div className="text">
        <p>Welcome back!</p>
        <h4>Wade Warren</h4>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="searchbar">
      <span>
        <img src={searchImg} alt="search" />
      </span>

      <input type="text" placeholder="Search here..." />

      <span>
        <img src={settingsImg} alt="settings" />
      </span>
    </div>
  );
}

function NewItems() {
  return (
    <div className="new-items">
      <div className="headings">
        <h2>New Items</h2>
        <h4>View all</h4>
      </div>
      <div className="items">
        {newItemsArr.map((item) => (
          <img src={item.src} alt={item.alt} key={item.alt} />
        ))}
      </div>
    </div>
  );
}
