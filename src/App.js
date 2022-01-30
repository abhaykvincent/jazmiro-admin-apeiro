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
import Product from './pages/products/Product';
import Navigation from './components/navigation.jsx'
import {addPageHistory,changePage,openSheet,closeSheet} from './features/history';
import Store from './pages/store/Store';
import Home from './pages/home/Home';;


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
      <div className="page orders hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    dispatch(changePage('order-single'));
                  }
                }
              >
                <div className="icon"></div>
                <div className="label">Home</div>
              </div>
              <div className="header-title">
                <h3>Orders</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">

              <div className="search"></div>
              <div className="order-sales">
                <div className="options">
                  <div className="option">7 days</div>
                  <div className="option">30 days</div>
                  <div className="option">90 days</div>
                </div>
                <div className="quick-views">

                <div className="orders-quick-view quick-view">
                  <div className="head">Orders</div>
                  <div className="body">
                    <div className="order-count count">
                    12
                    </div>
                    <div className="order-change change">
                      33%
                    </div>
                  </div>
                </div>
                <div className="sales-quick-view quick-view">
                  <div className="head">Sales</div>
                  <div className="body">
                    <div className="sales-count count">
                    12
                    </div>
                    <div className="sales-change change">
                      33%
                    </div>
                  </div>
                </div>

                </div>
              </div>
              <section className="quick-menus">

                <div className="quick-menu">
                  <div className="menu-icon"></div>
                  <div className="menu-title">New order</div>
                  <div className="menu-action"></div>
                </div>
                <div className="quick-menu"
                  onClick={
                    () => {
                      dispatch(changePage('order-single'));
                    }
                  }
                >
                  <div className="menu-icon"></div>
                  <div className="menu-title">All orders</div>
                  <div className="menu-action"></div>
                </div>
                <div className="quick-menu">
                  <div className="menu-icon"></div>
                  <div className="menu-title">Return orders</div>
                  <div className="menu-action"></div>
                </div>
                <div className="quick-menu">
                  <div className="menu-icon"></div>
                  <div className="menu-title">Fulfilled Orders</div>
                  <div className="menu-action"></div>
                </div>
              </section>
              <section className="order-list">
                <div className="date-label title">Orders to fulfill</div>
                <div className="order" 
                onClick={
                  () => {
                    dispatch(changePage('order-single'));
                  }
                }>
                  <div className="meta">
                    <div className="order-id">#10001</div>.
                    <div className="order-time">12.08 AM</div>
                  </div>
                  <div className="body">
                    <div className="order-info">
                      <div className="order-info-customer">{
                        //convert string to charecter limit and 3 . at the end
                        //customer name
                        customerName.length > 30 ? customerName.substring(0, 30) + '...' : customerName
                      }</div>
                      <div className="order-tags"></div>
                    <div className="order-items">1 Item</div>
                    </div>
                    <div className="order-price">$1230.0</div>
                  </div>
                </div>
                <div className="order" 
                onClick={
                  () => {
                    dispatch(changePage('order-single'));
                  }
                }>
                  <div className="meta">
                    <div className="order-id">#10001</div>
                    <div className="order-time">12.08 AM</div>
                  </div>
                  <div className="body">
                    <div className="order-info">
                      <div className="order-info-customer">{
                        //convert string to charecter limit and 3 . at the end
                        //customer name
                        customerName.length > 30 ? customerName.substring(0, 30) + '...' : customerName
                      }</div>
                      <div className="order-tags"></div>
                    <div className="order-items">1 Item</div>
                    </div>
                    <div className="order-price">$1230.0</div>
                  </div>
                </div>
                <div className="order" 
                onClick={
                  () => {
                    dispatch(changePage('order-single'));
                  }
                }>
                  <div className="meta">
                    <div className="order-id">#10001</div>.
                    <div className="order-time">12.08 AM</div>
                  </div>
                  <div className="body">
                    <div className="order-info">
                      <div className="order-info-customer">{
                        //convert string to charecter limit and 3 . at the end
                        //customer name
                        customerName.length > 30 ? customerName.substring(0, 30) + '...' : customerName
                      }</div>
                      <div className="order-tags"></div>
                    <div className="order-items">1 Item</div>
                    </div>
                    <div className="order-price">$1230.0</div>
                  </div>
                </div>
            </section>
            </div>
          </div>

        </div>
      </div>
      
      <div className="page allOrders hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    dispatch(changePage('home'));
                  }
                }
              >
                <div className="icon"></div>
                <div className="label">Home</div>
              </div>
              <div className="header-title">
                <h3>All</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">

              <div className="search"></div>

              <section className="order-list">
                <div className="date-label">Today</div>
                <div className="order"
                  onClick={
                    () => {
                      dispatch(changePage('order-single'));
                    }
                  }
                >
                  <div className="meta">
                    <div className="order-id">#10001</div>.
                    <div className="order-time">12.08 AM</div>
                  </div>
                  <div className="body">
                    <div className="order-info">
                      <div className="order-info-customer">{
                        //convert string to charecter limit and 3 . at the end
                        //customer name
                        customerName.length > 30 ? customerName.substring(0, 30) + '...' : customerName
                      }</div>
                      <div className="order-tags"></div>
                    <div className="order-items">1 Item</div>
                    </div>
                    <div className="order-price">$1230.0</div>
                  </div>
                </div>
                <div className="order">
                  <div className="meta">
                    <div className="order-id">#10001</div>.
                    <div className="order-time">12.08 AM</div>
                  </div>
                  <div className="body">
                    <div className="order-info">
                      <div className="order-info-customer">{
                        //convert string to charecter limit and 3 . at the end
                        //customer name
                        customerName.length > 30 ? customerName.substring(0, 30) + '...' : customerName
                      }</div>
                      <div className="order-tags"></div>
                    <div className="order-items">1 Item</div>
                    </div>
                    <div className="order-price">$1230.0</div>
                  </div>
                </div>
                <div className="order">
                  <div className="meta">
                    <div className="order-id">#10001</div>.
                    <div className="order-time">12.08 AM</div>
                  </div>
                  <div className="body">
                    <div className="order-info">
                      <div className="order-info-customer">{
                        //convert string to charecter limit and 3 . at the end
                        //customer name
                        customerName.length > 30 ? customerName.substring(0, 30) + '...' : customerName
                      }</div>
                      <div className="order-tags"></div>
                    <div className="order-items">1 Item</div>
                    </div>
                    <div className="order-price">$1230.0</div>
                  </div>
                </div>
              </section>

            </div>
          </div>

        </div>
      </div>
      
      {/* Order Single - PAGE*/}
      <div className="page order-single hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    dispatch(changePage('home'));
                  }
                }
              >
                <div className="icon"></div>
                <div className="label">Orders</div>
              </div>
              <div className="header-title">
                <h3></h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">

              <div className="search"></div>

              <section className="order-single-display">
                <div className="order-single-header">
                  <div className="order-id-name">
                    <div className="order-id">#10001</div>
                    <div className="order-customer">John Doe</div>
                  </div>
                  <div className="order-update-details">
                    <div className="line">Last updated by Mirza at 04:20 PM </div>
                    <div className="line via">via Apeiro Web Admin </div>
                  </div>
                  <div className="order-tags">
                    <div className="tag grey">Paid</div>
                    <div className="tag yellow">Unfulfilled</div>
                  </div>
                </div>
                <div className="order-single-body">

                  <div className="order-single-info">
                    <div className="order-single-info-label">
                      <p>CUSTOMER</p>
                    </div>
                    <div className="order-single-info-customer">
                      <div className="customer-name">John Doe</div>
                      <div className="customer-routine">3rd time customer</div>
                    </div>
                    <div className="shipping-billing-address">
                      <div className="label">SHIPPING AND BILLING ADDRESS</div>
                      <div className="address">
                        {/* Abhay Vincent
                        Apeiro Inc
                        1881 Dalhousie Crescent
                        Oshawa Alberta L1G8C4
                        Canada 
                        convert to address line
                        */}
                        <div className="address-line">Abhay Vincent</div>
                        <div className="address-line">Apeiro Inc</div>
                        <div className="address-line">1881 Dalhousie Crescent</div>
                        <div className="address-line">Oshawa Alberta L1G8C4</div>
                        <div className="address-line">Canada</div>
                      </div>
                    </div>
                      <div className="customer-contacts">
                        <div className="contact number">
                          <div className="contact-id">+1 365 688 2276</div>
                          <div className="action"></div>
                        </div>
                        <div className="contact email">
                          <div className="contact-id">john.doe@gmail.com</div>
                          <div className="action"></div>
                        </div>
                      </div>
                  </div>

                  <div className="order-tag-panel unfulfilled">
                    <div className="tag-panel-head">
                      <div className="tag-panel-head-icon"></div>
                      <div className="tag-panel-head-title">Unfulfilled</div>
                    </div>
                    <div className="tag-panel-body">
                      <div className="order-items">
                        <div className="order-item">
                          <div className="image"></div>
                          <div className="details">
                            <div className="name"> Lorem Isps Blue Variant</div>
                            <div className="price">$200.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="actions">
                        <div className="action button primary">Fulfill Order</div>
                        <div className="action button secondary">Send Invoice</div>
                      </div>
                  </div>
                </div>
                  <div className="order-tag-panel paid">
                    <div className="tag-panel-head">
                      <div className="tag-panel-head-icon"></div>
                      <div className="tag-panel-head-title">Paid</div>
                    </div>
                    <div className="tag-panel-body">

                      <div className="subtotal payment-section">
                        <div className="label">Subtotal</div>
                        <div className="section-details">
                          <div className="items">1 Item</div>
                          <div className="price">$200.00</div>
                        </div>
                      </div>
                      <div className="shiopping payment-section">
                        <div className="label">Shipping</div>
                        <div className="section-details">
                          <div className="items">Free Shipping</div>
                          <div className="price">$0.00</div>
                        </div>
                      </div>
                      <div className="total payment-section">
                        <div className="label">Total</div>
                        <div className="price">
                          $200.00
                        </div>
                      </div>

                      <div className="actions">
                        <div className="action button primary">Collect Payements</div>
                        <div className="action button secondary">Send Invoice</div>
                      </div>
                  </div>
                </div>
                
                </div>
              </section>

            </div>
          </div>

        </div>
      </div>
      
      {/* Product - PAGE*/}
      {/* <Product /> */}
      <div className="page products hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => { 
                    dispatch(changePage('home'));
                  }
                }
              >
                <div className="icon"></div>
                <div className="label">Home</div>
              </div>
              <div className="header-title">
                <h3>Products</h3>
              </div>
              <div className="option"
                onClick={
                  () => {
                    dispatch(openSheet('addProduct'))
                  }
                }
              
              >
                <div className="label"> </div>
                <div className="icon"></div>
              </div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">
            <section className="quick-menus">

              <div className="quick-menu"
                onClick={
                  () => {
                    dispatch(changePage('allProducts'));
                  }
                }
              >
                <div className="menu-icon"></div>
                <div className="menu-title">All Products</div>
                <div className="menu-action"></div>
              </div>
              <div className="quick-menu">
                <div className="menu-icon"></div>
                <div className="menu-title">Inventory</div>
                <div className="menu-action"></div>
              </div>
              <div className="quick-menu">
                <div className="menu-icon"></div>
                <div className="menu-title">Collections</div>
                <div className="menu-action"></div>
              </div>

            </section>
            <section className="products-list">
                <div className="title">Recently updated products</div>
                <div className="products">
                  <div className="products-inner">
                    {
                      productsList.map((product, index) => {
                          return (<div className="product" key={index}>
                            <div className="image"></div>
                            <div className="details">
                              <div className="name">{product.name}</div>
                              <div className="attributes">
                                <div className="status">Active</div>
                                <div className="available">1 available</div>
                              </div>
                            </div>
                          </div>
                      
                          )
                        }
                      )
                  } s
                  
                  </div>
                </div>
                </section>
            </div>
          </div>

        </div>
      </div>
      
      <div className="page allProducts hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    dispatch(changePage('home'));
                  }
                }
              >
                <div className="icon"></div>
                <div className="label"></div>
              </div>
              <div className="header-title">
                <h3>All products</h3>
              </div>
              <div className="option"
                onClick={
                  () => {
                    dispatch(openSheet('addProduct'))
                  }
                }
              
              >
                <div className="label"> </div>
                <div className="icon"></div>
              </div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">
                <div className="products">
                  {/* display product div n times */}
                  {
                    productsList.map((product, index) => {
                      return (
                        <div className="product" key={index}>
                          <div className="product-image"></div>   
                          <div className="product-details">
                            <div className="product-name">{product.name}</div>
                            <div className="product-attributes">
                              <div className="available">7 available</div>
                              <div className="variants">16 variants</div>
                              <div className="status">Active</div>
                            </div>
                          </div>
                        </div>
            
                      )
                    })
                  }
                </div>
                
            </div>
          </div>

        </div>
      </div>
      

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