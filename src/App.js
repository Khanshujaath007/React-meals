import IntroCard from "./components/UI/IntroCard";
import { Menu } from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import CartProvider from "./store/CartProvider";
function App() {
  return (
    <CartProvider>
      <Header></Header>
      <IntroCard></IntroCard>
      <Menu ></Menu>
    </CartProvider>
  );
}

export default App;
