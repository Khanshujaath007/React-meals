import { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import "./Cart.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Fragment>
      <ul className="unorderdlist">
        {cartCtx.items.map((item) => (
          <CartItem
            name={item.name}
            key={item.id}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          ></CartItem>
        ))}
      </ul>
      <div className="total">
        <span>Total</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onConfirm}>
          close
        </button>
        {hasItems && <button className="button">order</button>}
      </div>
    </Fragment>
  );
};

export default Cart;
