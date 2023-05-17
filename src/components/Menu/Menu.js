import { Fragment } from "react";
import MenuList from "./MenuList";
// import MenuWrapper from "./MenuWrapper";

const MenuItems = [
  {
    id: 1,
    name: "Burger",
    description:
      "Juicy beef patty, lettuce, tomato, onion, and pickles on a sesame seed bun.",
    price: 9.99,
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Pizza",
    description:
      "Thin crust pizza with tomato sauce, mozzarella cheese, and your choice of toppings.",
    price: 12.99,
    image:
      "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Pizza",
  },
  {
    id: 3,
    name: "Salad",
    description:
      "Mixed greens, cherry tomatoes, cucumber, and red onion with your choice of dressing.",
    price: 7.99,
    image:
      "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Salads",
  },
  {
    id: 4,
    name: "Fries",
    description: "Crispy golden fries with your choice of dipping sauce.",
    price: 3.99,
    image:
      "https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Sides",
  },
];

const Menu = (props) => {
  const MenudataHandler = (data) => {
    props.onMenudatahandler(data);
  };
  return (
    <Fragment>
      {MenuItems.map((item) => (
        <MenuList
          onAddHandler={MenudataHandler}
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </Fragment>
  );
};

export { Menu, MenuItems };
