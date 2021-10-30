
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
import MyOrder from './component/MyOrders/MyOrder';
import ManageAllOrder from './component/ManageAllOrders/ManageAllOrder';
import AddService from './component/AddService/AddService';
import UpdateOrder from './component/UpdateOrder/UpdateOrder';
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
          {/* <PrivateRoute  path="/about">
            <About></About>
          </PrivateRoute> */}
         
         <Route exact path="/myOrders">
           <MyOrder></MyOrder>
           </Route>
         <Route  path="/manageAllOrders">
           <ManageAllOrder></ManageAllOrder>
           </Route>
           <Route  path="/addService">
             <AddService></AddService>
           </Route>


          <PrivateRoute  path="/order/:id">
            <OrderPage></OrderPage>
          </PrivateRoute>
          <Route path="/sign">
            <SignIn></SignIn>
          </Route>
           
          <Route  path='/addOrders/update/:id'>
               <UpdateOrder></UpdateOrder>
            </Route>



          <Route   path="/">
            <Home ></Home>
          </Route>
          
          {/* /addOrders/update/ */}
         
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
