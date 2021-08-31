import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import ProductList from './components/productlist';

const App=()=>{
  return (

    <>

    <Link to='/home' >Home</Link>

    <Switch>
      <Route exact path='/home'>
        <ProductList/>
      </Route>
    </Switch>

    </>
    
  );
}

export default App;
