import Header from './components/Header';
import Products from './components/Products';
import Home from './components/Home';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={ProductDetail}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/checkout" component={Checkout}/>
    </Switch>
    
    </>
  );
}

export default App;
