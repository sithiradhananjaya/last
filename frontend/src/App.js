import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import Footer from './screens/Footer.js'

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <nav className="myNav">
          <div className="logo">
            <Link to="/">Gents House</Link>
          </div>
          
          <ul className="nav-items">
            <li><Link to="/category/Pants">Pants</Link></li>
            <li><Link to="/category/Shirts">Shirts</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            {userInfo && userInfo.isAdmin && (
            <>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/products">Products</Link></li>
              </>
            )}
            {userInfo ? (
              <li><Link to="/profile">{userInfo.name}</Link></li>
            ) : (
              <>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
