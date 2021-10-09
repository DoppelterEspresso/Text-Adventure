import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import { Inventory } from "./Inventory";
import { Fight } from "./Fight";
import { Map } from "./Map";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/fight" component={Fight} />
        <Route exact path="/map" component={Map} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
