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
import EditProduct from './components/editproducts';
import AddNewUser from './components/adduser';
import { ProtectedRoute } from './protetcted.routes';

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
      {/* <Route exact path='/dashboard'>
        <ShowDashboad/>
      </Route> */}
      
      <ProtectedRoute
      exact path='/dashboard'
      component={ShowDashboad}
      
      />



      <Route exact path='/addcat'>
                   
                   <AddCategory/>
                </Route>
      
      
       {/* <Route exact path ='/addprod'>
         <AddProduct/>
         </Route>   */}
         <ProtectedRoute
          exact path ='/addprod'
          component={AddProduct}
          />


         <Route exact path='/catlist'   >
           <CategoryList/>
           
           </Route>
           <Route exact path='/profile'>
             <Profile/>
             </Route>

             <Route exact path='/product-details/:id'>

          <ProductDetails/>

        </Route>  
        <Route exact path='/edit-product/:id'>

          <EditProduct/>

        </Route> 
        

        <Route exact path='/signup'>
          <SignUp/>
        </Route> 

        {/* <Route exact path='/adduser'>
          <AddNewUser/>
        </Route>   */}

        <ProtectedRoute
          exact path ='/adduser'
          component={AddNewUser}
          />
     
    </Switch>
     
    
    </main>

    


    





    </>
    
  );
}

export default App;
