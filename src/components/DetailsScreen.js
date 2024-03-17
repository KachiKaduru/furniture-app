import heartBtn from "../images/icons/Heart.png";
import heartBtn2 from "../images/icons/Heart-plain.svg";
import star from "../images/icons/star.svg";
import cart from "../images/icons/shopping-cart-white.png";
import backBtn from "../images/icons/Chevron-Left.png";
import { useState } from "react";

const smallImgsArr = [1, 2, 3, 4];

const reviewArr = ["bad", "poor", "fair", "good", "excellent"];

const colorArr = ["#807b75", "#404041", "#61ae9c"];

export default function DetailsScreen({
  clickedItem,
  onPageChange,
  setClickedItem,
  list,
  setList,
}) {
  return (
    <div className="details-screen">
      <div className="container">
        <ExitComponent
          onPageChange={onPageChange}
          clickedItem={clickedItem}
          setClickedItem={setClickedItem}
          list={list}
          setList={setList}
        />
        <DisplayItem clickedItem={clickedItem} />
      </div>
    </div>
  );
}

function ExitComponent({ onPageChange, clickedItem, setClickedItem, list, setList }) {
  function handleAddToWishList() {
    setClickedItem({ ...clickedItem, liked: !clickedItem.liked });
  }

  return (
    <div className="exit-component">
      <button className="exit-btn" onClick={onPageChange}>
        <img src={backBtn} alt="back" />
      </button>

      <div
        className={`heart-btn ${clickedItem.liked ? "liked" : null}`}
        onClick={() => handleAddToWishList()}
      >
        <img src={clickedItem.liked ? heartBtn : heartBtn2} alt="add to wishlist" />
      </div>
    </div>
  );
}

function DisplayItem({ clickedItem }) {
  const [itemAmount, setItemAmount] = useState(1);

  const totalPrice = clickedItem.price * itemAmount;

  function handleDecrease() {
    if (itemAmount === 1) return;
    setItemAmount((a) => a - 1);
  }

  function handleIncrease() {
    setItemAmount((a) => a + 1);
  }

  return (
    <main className="display-item">
      <div className="item-image">
        <img src={clickedItem.source} alt={clickedItem.name} />

        <div className="small-imgs">
          {smallImgsArr.map((image) => (
            <img src={clickedItem.source} alt={image} key={image} />
          ))}
        </div>
      </div>

      <div className="item-details">
        <h3>{clickedItem.name}</h3>

        <div className="review-stn">
          {reviewArr.map((rev) => (
            <img src={star} alt={rev} key={rev} />
          ))}
          <span> Reviews </span>
        </div>

        <h4 className="price">${clickedItem.price}.00</h4>

        <div className="colors">
          <p>Color</p>

          <div className="color-picks">
            {colorArr.map((color) => (
              <div style={{ backgroundColor: color }} key={color}></div>
            ))}
          </div>
        </div>

        <div className="amount">
          <button onClick={handleDecrease}>-</button>
          <input type="text" value={itemAmount} disabled />
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>

      <div className="add-item-to-cart">
        <h3>Total: ${totalPrice}. 00</h3>
        <button className="add-to-cart-btn">
          <img src={cart} alt="" /> <span> Add to Cart</span>
        </button>
      </div>
    </main>
  );
}
