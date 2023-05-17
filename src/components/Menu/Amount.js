import { useState } from "react";
import "./Amount.css";
const Amount = (props) => {
  const [quantity, setQuantity] = useState(1);
  const amountHandler = () => {
    setQuantity(prevState=>prevState+1);
    // pass quantity to menuList component
    props.onAdd(quantity);
  };

  return (
    <>
      <div className="amount" >
        <span>
          <label htmlFor="quantity">Amount: </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            onChange={amountHandler}
            value={quantity}
            min={0}
          />
        </span>
        <button onClick={amountHandler}>Add</button>
      </div>
    </>
  );
};
export default Amount;
