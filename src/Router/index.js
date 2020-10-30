import React from "react";
import {
  HashRouter as ZzyRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import App from "../App";
import Home from "../Views/Home";
import Classify from "../Views/Classify";
import SearchTitle from "../Views/SearchTitle";
import Cart from "../Views/Cart";
import GoodsDetail from "../Views/GoodsDetail";
import NewActivityTemplate from "../Views/NewActivityTemplate";
import ActivityPagew from "../Views/ActivityPagew";
import Search from "../Views/Classify/search";
import Keyword from "../Views/Classify/search/keyword";
import Father from "../Views/Classify/father";
import Demo from "../Demo";
const router = (
  <ZzyRouter>
    <App>
      <Redirect from="/" to="/SearchTitle" />
      <Route replace path="/home" component={Home} />
      <Route path="/classify" component={Father} />
      <Route path="/demo" component={Demo} />
      <Route path="/cart" component={Cart} />
      <Route path="/classify/search/:source" component={Search} />
      <Route path="/classify/search/keyword/:source" component={Keyword} />
      <Route path="/goodsDetail/:source" component={GoodsDetail} />
      <Route
        path="/newActivityTemplate/:source"
        component={NewActivityTemplate}
      />
      <Route path="/SearchTitle" component={SearchTitle} />
      <Route path="/activityPagew/:source" component={ActivityPagew} />
    </App>
  </ZzyRouter>
);
export default router;
