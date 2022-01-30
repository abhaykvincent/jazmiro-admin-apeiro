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
      
      <AllProducts/>

      <div className="sheet addProduct hide">
          <div className="sheet-inner">

          {/* Sheet Header 
              OnDragDown sheel will collapse the
          */}
          <div className="sheet-header"
            onTouchMove={
              (e) => {
                if (e.touches[0].clientY < 100) {
                  dispatch(closeSheet());
                }
              }
            }
          >
            <div className="sheet-header-inner">
              <div className="header-button">
              </div>
              <div className="header-title">
                <h3>Add product</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="sheet-content">
            <div className="sheet-content-inner">

              <div className="section product-name-description" >
                <div className="section-inner">
                  <div className="icon"></div>
                  <div className="inputs">

                    <div className="input product-name">
                      <div className="label">
                        <input type="text" className="editable-content" placeholder="Add Product"/>
                      </div>
                      <div className="description"></ div>
                    </div>
                    <div className="input product-description">
                      <div className="label">
                        <input type="text" className="editable-content" placeholder="Add Product"/>
                      </div>
                      <div className="description"></ div>
                    </div>

                  </div>
                </div>
                <div className="section-inner">
                  <div className="icon"></div>
                  <div className="inputs">

                    <div className="input product-name">
                      <div className="label">
                        <input type="text" className="editable-content" placeholder="$0.00"/>
                      </div>
                      <div className="description"></ div>
                    </div>

                  </div>
                </div>
                <section className="option-section">
                  <div className="option-head">
                    <div className="option-title">Inventory</div>
                    <div className="more">More</div>
                  </div>
                  <div className="option-body">
                    <div className="counter-label">Available</div>
                    <div className="counter">
                      <div className="counter-inner">
                        <div className="counter-button minus">
                          <div className="icon"></div>
                        </div>
                        <div className="counter-input">
                          <input type="text" placeholder="0"/>
                        </div>
                        <div className="counter-button add">
                          <div className="icon"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="option-section variations">
                  <div className="option-head">
                    <div className="option-title">Options</div>
                  </div>
                  <div className="option-body">
                    <div className="counter-label">Add different variations like size or color</div>
                      <div className="button secondary option-action"
                        onClick={
                          () => {
                            dispatch(openSheet('addOption'))
                          }
                        }
                      >View options</div>
                    </div>
                </section>
              </div>
            
            </div>
          </div>

              </div>
        </div>
      
      <div className="sheet mini addOption  hide">
          <div className="sheet-inner">

          {/* Sheet Header 
              OnDragDown sheel will collapse the
          */}
          <div className="sheet-header"
            onTouchMove={
              (e) => {
                
                if (e.touches[0].clientY < 400) {
                  dispatch(closeSheet());
                }
              }
            }
          >
            <div className="sheet-header-inner">
              <div className="header-button">
              </div>
              <div className="header-title">
                <h3>Add Option</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="sheet-content">
            <div className="sheet-content-inner">

              <div className="section product-name-description" >
                <div className="section-inner">
                  <div className="icon"></div>
                  <div className="inputs">

                    <div className="input product-name">
                      <div className="label">
                        <input type="text" className="editable-content" placeholder="Add Product"/>
                      </div>
                      <div className="description"></ div>
                    </div>
                    <div className="input product-description">
                      <div className="label">
                        <input type="text" className="editable-content" placeholder="Add Product"/>
                      </div>
                      <div className="description"></ div>
                    </div>

                  </div>
                </div>
                <div className="section-inner">
                  <div className="icon"></div>
                  <div className="inputs">

                    <div className="input product-name">
                      <div className="label">
                        <input type="text" className="editable-content" placeholder="$0.00"/>
                      </div>
                      <div className="description"></ div>
                    </div>

                  </div>
                </div>
                <section className="option-section">
                  <div className="option-head">
                    <div className="option-title">Inventory</div>
                    <div className="more">More</div>
                  </div>
                  <div className="option-body">
                    <div className="counter-label">Available</div>
                    <div className="counter">
                      <div className="counter-inner">
                        <div className="counter-button minus">
                          <div className="icon"></div>
                        </div>
                        <div className="counter-input">
                          <input type="text" placeholder="0"/>
                        </div>
                        <div className="counter-button add">
                          <div className="icon"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="option-section variations">
                  <div className="option-head">
                    <div className="option-title">Options</div>
                  </div>
                  <div className="option-body">
                    <div className="counter-label">Add different variations like size or color</div>
                      <div className="button secondary option-action">View options</div>
                    </div>
                </section>
              </div>
            
            </div>
          </div>

              </div>
        </div>
      
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