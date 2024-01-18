import { render } from "solid-js/web";
import App from "./App";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import { Router, Route } from "@solidjs/router";
import "./index.css";

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found!');
}

render(
  () => (
    <Router>
        <Route path="/" component={App} />
        <Route path="/cart" component={Cart} /> {/* 👈 Define the about page route */}
        <Route path="/profile" component={Profile} /> {/* 👈 Define the contact page route */}
    </Router>
  ),
  root,
);
