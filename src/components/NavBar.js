import homeBtn from "../images/icons/Home.png";
import wishlistBtn from "../images/icons/Heart.png";
import cartBtn from "../images/icons/shopping-cart.png";
import userBtn from "../images/icons/User.png";

import { useState } from "react";

const iconsArr = [
  { id: 1, imgSource: homeBtn, description: "Home" },
  { id: 2, imgSource: wishlistBtn, description: "Wishlist" },
  { id: 3, imgSource: cartBtn, description: "Cart" },
  { id: 4, imgSource: userBtn, description: "User" },
];

export default function NavBar() {
  const [clicked, setClicked] = useState(1);

  function handleClicked(icon) {
    setClicked(icon.id);
  }

  return (
    <nav>
      <div className="container">
        <div className="nav">
          {iconsArr.map((icon) => (
            <div
              onClick={() => handleClicked(icon)}
              className={`nav-btn ${icon.id === 1 && "home"} ${
                clicked === icon.id ? "current-page" : null
              }`}
              key={icon.description}
            >
              <div className="img-div">
                <img src={icon.imgSource} alt={icon.description} />
              </div>
              <p>{icon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
