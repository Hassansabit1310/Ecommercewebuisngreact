import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ProductList from './components/productlist';
import AdminLogin from './components/adminlogin';
import ShowDashboad from './components/dashboard';
import Navbar from './components/Navbar/Navbar';
import AddCategory from './components/addcategory';
import AddProduct from './components/addnewproduct';
import CategoryList from './components/categorylist';
import Profile from './components/profile';
import ProductDetails from './components/productdetails';
import SignUp from './components/signup';

const App=()=>{
  return (

    <>

    <Navbar/>
    <main>
     
      <Switch>
      <Route exact path='/home'>
        <ProductList/>
      </Route>

      <Route exact path='/login'>
        <AdminLogin/>
      </Route>
      <Route exact path='/dashboard'>
        <ShowDashboad/>
      </Route>
      <Route exact path='/addcat'>
                   
                   <AddCategory/>
                </Route>
       <Route exact path ='/addprod'>
         <AddProduct/>
         </Route>  

         <Route exact path='/catlist'   >
           <CategoryList/>
           
           </Route>
           <Route exact path='/profile'>
             <Profile/>
             </Route>

             <Route exact path='/product-details/:id'>

          <ProductDetails/>

        </Route>  

        <Route exact path='/signup'>
          <SignUp/>
        </Route>  
     
    </Switch>
     
    
    </main>

    


    





    </>
    
  );
}

export default App;
