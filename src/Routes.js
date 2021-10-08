import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import { Inventory } from "./Inventory";
import { Fight } from "./Fight";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/fight" component={Fight} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
