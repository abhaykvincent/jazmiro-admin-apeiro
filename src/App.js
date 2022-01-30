//Style 
import './style/App.css';
import './style/page.scss';
import './style/navigation.scss';

import './style/home.scss';
import './style/orders.scss';
import './style/allOrders.scss';
import './style/order-single.scss';
import './style/products.scss'
import './style/add-product.scss'
import { useEffect, useState, } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Navigation from './components/navigation.jsx'
import {addPageHistory,changePage,openSheet,closeSheet} from './features/history';

import Store from './pages/store/Store';
import Home from './pages/home/Home';import Orders from './pages/orders/Orders';
import AllOrders from './pages/orders/AllOrders';
import OrderSingle from './pages/orders/OrderSingle';
import Products from './pages/products/Products';
import AllProducts from './pages/products/AllProducts';
import AddProduct from './pages/products/AddProduct';
import AddProductOptions from './pages/products/AddProductOptions';
;


function App() {


  let productsList=useSelector(state=>state.products.data);
  let ordersList=useSelector(state=>state.orders.data);
  const dispatch=useDispatch();
  //state to store list of pages
  const [history, setHistory] = useState([]);
  const [customerName, setCustomerName] = useState('John Doefghokff');
  const [orders, setOrders] = useState([1,2,3,4,5,6]);

  
  //close spesipc sheet   
  

  return (
    <div className="App">

      {/* Home - PAGE */}
      <Home/>
      
      {/* Order Single - PAGE */}
      <Orders/>
      {/* All Orders - PAGE */}
      <AllOrders/>
      {/* Order Single - PAGE*/}
      <OrderSingle/>

      {/* Product - PAGE*/}
      <Products />
      {/* All Products - PAGE*/}
      <AllProducts/>
      {/* Add Product - SHEET*/}
      <AddProduct/>
      {/* Add Product Options - SHEET*/}
      <AddProductOptions/>
      
      {/* Store - PAGE*/}
      <Store/>

      <div className="sheet-cover-black"
        onClick={
          () => {
            dispatch(closeSheet())  
          }
        }
        //react on drag down
        onTouchMove={
          (e) => {
            if (e.touches[0].clientY < 100) {
              console.log(history[history.length - 1])
                closeSheet()
            }
          }
        }
      >

      </div>
      
      {/* Navigation */}
      <Navigation/>
    </div>
  );
}

export default App;