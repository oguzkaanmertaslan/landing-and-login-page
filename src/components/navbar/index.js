import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/login";
import Landing from "../../pages/landing";
import Register from "../../pages/register";
import ForgotPassword from "../../pages/forgotpassword";
const Navbar = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route path="/login" component={Login} />

          <Route path="/register" component={Register} />

          <Route path="/forgotpassword" component={ForgotPassword} />
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar;
