import "./App.css";
import { useState } from "react";
import style from "./app.module.css";
import Cart from "./component/cart/Cart";
import CartList from "./component/cart/CartList";
import Header from "./component/Header/Header";
import Main from "./component/Main";
import Menu from "./component/menu/Menu";
import Signup from "./component/Signup";
import Login from "./component/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    <Router>
      
      <div className="App">
        <Header menutoggle={menutoggle} />
        <div className={style.body}>
          <Menu menu={menu} />
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="/login" element={<Login/>} />
          </Routes>
          <Cart listtoggle={listtoggle} />
          <CartList list={list} listtoggle={listtoggle} />
        </div>
      </div>
    </Router>
  );
}

export default App;
