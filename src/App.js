import React, { useState,useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import {Product_page_mens_new} from "./Components/Products/Product_page"
import {Product_page_womens_new} from "./Components/Products/Product_page"
import {Product_page_fruits} from "./Components/Products/Product_page"
import {Product_page_vegetable} from "./Components/Products/Product_page"
import Product_page_men from "./Components/Products/Product_page_men";
import Product_page_women from "./Components/Products/Product_page_women";
import Checkout from "./Components/Checkout/Checkout";
import All_product from "./Components/Products/All_product";
import Product_page_grocery from "./Components/Products/Product_page_grocery";
import {auth} from './firebase'
import {useStateValue} from './Components/Reducer/StateProvider'
import Payment from "./Components/Payment/Payment"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from "./Components/Orders/Orders"
import Contact from "./Components/Contact Us/Contact"
import Locations_page from "./Components/Store Location/Locations_page"
import Footers from "./Components/Footer/Footers"
const promise = loadStripe("pk_test_51HfLCEHb9dMOcnd6CUaBtqqFRJuKcVw5bUOow0dtRWxzLV8vJ4fjO7w6cHJvBPHqadbRPt7oYbXoDjXbMQbCSqTj0033za6Z8e")

function App() {
  // this
  const [search, setSearch] = useState("");
  const [{ basket,user}, dispatch] = useStateValue();
  // const [] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS", authUser);
      if (authUser) {
        //logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      {/* <div className="App"> */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/checkout">
          <Header setSearch={setSearch}></Header>
          {/* <Header></Header> */}
          <Checkout></Checkout>
          
        </Route>
        <Route path="/orders">
          <Header setSearch={setSearch}></Header>
          <Orders></Orders>
          <Footers></Footers>
        </Route> 
        <Route path="/contact-us">
          <Header setSearch={setSearch}></Header>
          <Contact></Contact>
          <Footers></Footers>
        </Route>
        <Route path="/stores">
          <Header setSearch={setSearch}></Header>
          <Locations_page></Locations_page>
          <Footers></Footers>
        </Route>
        <Route path="/search">
          <Header setSearch={setSearch}></Header>
          <All_product searchValue={search} />
          <Footers></Footers>
        </Route>
        <Route path="/womens">
          <Header setSearch={setSearch}></Header>
          {/* <Header></Header> */}
          <Product_page_women></Product_page_women>
          <Footers></Footers>
        </Route>
        <Route path="/mens">
          <Header setSearch={setSearch}></Header>
          {/* <Header></Header> */}
          <Product_page_men></Product_page_men>
          <Footers></Footers>
        </Route>
        <Route path="/grocery">
          <Header setSearch={setSearch}></Header>
          {/* <Header></Header> */}
          <Product_page_grocery></Product_page_grocery>
          <Footers></Footers>
        </Route>
        <Route path="/mens-new">
          <Header setSearch={setSearch}></Header>
          {/* <Header></Header> */}
          <Product_page_mens_new></Product_page_mens_new>
          <Footers></Footers>
        </Route>
        <Route path="/womens-new">
          <Header setSearch={setSearch}></Header>
          {/* <Header></Header> */}
          <Product_page_womens_new></Product_page_womens_new>
          <Footers></Footers>
        </Route>
        <Route path="/fruits">
          <Header setSearch={setSearch}></Header>
          {/* <Header></Header> */}
          <Product_page_fruits></Product_page_fruits>
          <Footers></Footers>
        </Route>
        <Route path="/vegetables">
          <Header setSearch={setSearch}></Header>
          {/* <Header></Header> */}
          <Product_page_vegetable></Product_page_vegetable>
          <Footers></Footers>
        </Route>
        <Route exact path="/">
          <Header setSearch={setSearch}></Header>
          {/* <Header></Header> */}
          <HomePage></HomePage>
          <Footers></Footers>
        </Route>
        <Route exact path="/payment">
          <Header setSearch={setSearch}></Header>
          <Elements stripe={promise}>
          <Payment></Payment>
          </Elements>
          <Footers></Footers>
          {/* <Header></Header> */}
          
        </Route>
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;