import react from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartPage, Detail, HomePage } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/detail/:id" component={Detail} />
            <Route path="/cart" children={<CartPage />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
