import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './component/About/About';
import Header from './component/Header/Header';
import Users from './component/Users/Users';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';

function App() {


  return (
    <div className="App">
    <Router>
      <Header></Header>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route  path="/">
            <Home ></Home>
          </Route>
          
        </Switch>
        <Footer></Footer>
     
    </Router>


    </div>
  );
}

export default App;
