import "./Header.css";
import headimage from "../../assets/foodbg.jpg";
import Modal from "../UI/Modal";
import Cart from "../Cart/Cart";
import cartcontext from "../../store/cart-context";
import { useEffect, useState, useContext } from "react";
const Header = () => {
  let cartlogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-basket"
      viewBox="0 0 16 16"
    >
      {" "}
      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />{" "}
    </svg>
  );

  const [cartAimation, setcartAnination] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const cartCtx = useContext(cartcontext);
  const cartHandler = () => {
    setCartModal(true);
  };

  const CartModalHandler = () => {
    setCartModal(false);
  };
  const { items } = cartCtx;
  //btn animation
  useEffect(() => {
    if (items.length === 0) return;
    setcartAnination(true);
    const timer = setTimeout(() => {
      setcartAnination(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const btnClasses = `${cartAimation ? "bump" : ""}`;
  const noofCartItems = items.length;
  return (
    <>
      {cartModal && (
        <Modal onConfirm={CartModalHandler}>
          <Cart onConfirm={CartModalHandler}></Cart>
        </Modal>
      )}
      <header className="header">
        <span>React Meals</span>
        <span>
          <button onClick={cartHandler} className={btnClasses}>
            {cartlogo} Cart <span className="cartcount">{noofCartItems}</span>
          </button>
        </span>
      </header>
      <div className="mainimage">
        <img className="image" src={headimage} alt="not found" />
      </div>
    </>
  );
};

export default Header;
