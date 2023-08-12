import { Fragment } from "react";
import { useEffect, useState } from "react";
import MenuList from "./MenuList";

const Menu = (props) => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const MenudataHandler = (data) => {
    props.onMenudatahandler(data);
  };

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-meals-19cea-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      //to convert objects to array of objects
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          image: responseData[key].image,
          price: responseData[key].price,
          category: responseData[key].category,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  if (isloading) {
    return (
      <>
        <h3>LOADING...</h3>
      </>
    );
  }
  return (
    <Fragment>
      {meals.map((item) => (
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

export default Menu;
