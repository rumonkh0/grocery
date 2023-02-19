import "./App.css";
import { useState } from "react";
import style from './app.module.css'
import Cart from "./component/cart/Cart";
import CartList from "./component/cart/CartList";
import Header from "./component/Header/Header";
// import Main from "./component/Main";
import Menu from "./component/menu/Menu";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  const [list, setList] = useState(false);
  const [menu, setMenu] = useState(false);

  var listtoggle = () => {
    list ? setList(false) : setList(true);
  };

  var menutoggle = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  return (
    <div className="App">
      <Header menutoggle={menutoggle}/>
      <div className={style.body}>
        <Menu menu={menu}/>
        {/* <Main /> */}
        {/* <Signup/> */}
        <Login/>
        <Cart listtoggle={listtoggle} />
        <CartList list={list} listtoggle={listtoggle} />
      </div>
    </div>
  );
}

export default App;
