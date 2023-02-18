import "./App.css";
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
      </div>
    </div>
  );
}

export default App;
