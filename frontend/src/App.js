import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./views/Admin";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup"
import Profile from "./views/Profile";
import Products from "./views/Products";
import ProductsList from "./components/ProductsList";
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/admin/products" exact component={Products} />
        <Route path="/products/cities/:cityname" exact component={ProductsList} />
        <Route path="/products/:id" exact component={ProductsList} />
      </div>

    </BrowserRouter>
  );
}

export default App;
