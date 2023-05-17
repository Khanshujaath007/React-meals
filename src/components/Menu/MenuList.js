import "./MenuList.css";
import Amount from "./Amount";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const MenuList = (props) => {
  const cartCtx = useContext(CartContext);
  const onAddAmountHandler = (quantity) => {
    cartCtx.addItem({
      id:props.id,
      name: props.name,
      amount: quantity,
      price: props.price,
    });
  };

  return (
    <>
      <div className="card">
        <img src={props.image} alt="not found"></img>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>$ {props.price}</span>
        <Amount onAdd={onAddAmountHandler}></Amount>
      </div>
    </>
  );
};

export default MenuList;
