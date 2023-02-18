import "./App.css";
import Cart from "./component/cart/Cart";
import CartList from "./component/cart/CartList";
import Header from "./component/Header/Header";
import Main from "./component/Main";
import Menu from "./component/menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Menu />
        <Main />
        <Cart/>
        <CartList/>
      </div>
    </div>
  );
}

export default App;
