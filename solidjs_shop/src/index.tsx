import { render } from "solid-js/web";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import { Router, Route } from "@solidjs/router";
import "./index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No root element found!");
}

render(
  () => (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />{" "}
      <Route path="/profile" component={Profile} />{" "}
    </Router>
  ),
  root,
);
