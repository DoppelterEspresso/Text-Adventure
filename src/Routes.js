import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import { Inventory } from "./Inventory";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/inventory" component={Inventory} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
