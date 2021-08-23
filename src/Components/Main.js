import { Switch, Route } from "react-router-dom";
import "../style/layout.css";
import Contact from "./Contact";
import Products from "./Products";

function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Main;
