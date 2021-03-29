import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Products from "./views/Products";
import NavBar from './views/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route path="/admin/products" component={Products} />
      </div>

    </BrowserRouter>
  );
}

export default App;
