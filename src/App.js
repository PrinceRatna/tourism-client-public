
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from './component/About/About';
import Header from './component/Header/Header';
import Users from './component/Users/Users';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import SignIn from './component/SignIn/SignIn';
import NotFound from './component/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute'
import OrderPage from './component/OrderPage/OrderPage';
function App() {


  return (
    <div className="App">
      <AuthProvider>
    <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute  path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/order/:id">
            <OrderPage></OrderPage>
          </PrivateRoute>
          <Route exact  path="/">
            <Home ></Home>
          </Route>
          <Route path="/sign">
            <SignIn></SignIn>
          </Route>

          <Route path="*">
            <NotFound></NotFound>

          </Route>
          
        </Switch>
        <Footer></Footer>
     
    </Router>
    </AuthProvider>

    </div>
  );
}

export default App;
