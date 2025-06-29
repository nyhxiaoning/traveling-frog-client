import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MyProfile from "./Pages/Dashboard/MyProfile";
import EditProfile from "./Pages/Dashboard/EditProfile";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home";
import DetailsView from "./Pages/DetailsView/DetailsVIew";
import Splash from "./Pages/Login/Splash"

const authGuard = (Component) => () => {
  localStorage.setItem('data', JSON.stringify({
    access_token: "123", user: {
      email: "154@qq.com"
    }
  }))
  return JSON.parse(localStorage.getItem("data"))?.access_token ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  );
};

const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route path="/login">
          <Splash />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/myprofile" render={authGuard(MyProfile)}></Route>
        <Route path="/editprofile" render={authGuard(EditProfile)}></Route>
        <Route exact path="/" render={authGuard(Home)}></Route>
        <Route path="/types">
          <DetailsView />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
