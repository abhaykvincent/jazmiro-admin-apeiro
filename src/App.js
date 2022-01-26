
import './style/App.css';
import './style/page.scss';
import './style/navigation.scss';

import './style/home.scss';
import './style/orders.scss';
import './style/allOrders.scss';
import './style/order-single.scss';
import { useState } from 'react';

function App() {
  //state to store list of pages
  const [history, setHistory] = useState([]);
  const [customerName, setCustomerName] = useState('John Doefghokff');

  const changePage = (page) => { 

    
    document.querySelector('.sheet').classList.remove('active');
    /* document.querySelector('.level-one').classList.remove('active'); */
    if(document.querySelector('.level-one') != null){
      document.querySelector('.level-one').classList.remove('level-one')
    }
    
    document.querySelector('.page.active').classList.add('hide');
    document.querySelector('.page.active').classList.remove('active');

    
    document.querySelector(`.page.${page}`).classList.add('active');
    document.querySelector(`.page.${page}`).classList.remove('hide');
    document.querySelector('.sheet-cover-black').classList.remove('active');
    

  }
  //open spesipic sheet
  const openSheet = (sheet) => {
    setHistory([...history, sheet]);
    document.querySelector('.sheet-cover-black').classList.add('active');

    document.querySelector('.page.active').classList.add('level-one');

    document.querySelector(`.sheet.${sheet}`).classList.add('active');
    document.querySelector(`.sheet.${sheet}`).classList.remove('hide');
  }
  //close spesipc sheet
  const closeSheet = () => {
    setHistory(history.slice(0, history.length - 1));
    document.querySelector('.sheet-cover-black').classList.remove('active');
    document.querySelector(`.sheet.${history[history.length-1] }`).classList.remove('active');
    document.querySelector(`.page.active`).classList.remove('level-one');
    debugger  

  }

  return (
    <div className="App">

      <div className="page home  active ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button">
              </div>
              <div className="header-title">
                <h3>Home</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">
              <section className="welcome">
                <h1>Welcome to Apeiro, Mirza</h1>
                <p>Moving along nicely</p>
              </section>
              <section className="quick-menus">

                <div className="quick-menu">
                  <div className="menu-icon"></div>
                  <div className="menu-title">New Order</div>
                  <div className="menu-action"></div>
                </div>
                <div className="quick-menu">
                  <div className="menu-icon"></div>
                  <div className="menu-title">New Product</div>
                  <div className="menu-action"></div>
                </div>
                <div className="quick-menu">
                  <div className="menu-icon"></div>
                  <div className="menu-title">New Customer</div>
                  <div className="menu-action"></div>
                </div>

              </section>
              <section className="order-list">
                <div className="date-label">Today</div>
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

              <p className="developed-at-apeiro">Developed at Apeiro Inc.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sheet addProduct hide">
          <div className="sheet-inner">

          <div className="sheet-header"
            onTouchMove={
              (e) => {
                if (e.touches[0].clientY < 100) {
                  closeSheet('addProduct')
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
            </div>
          </div>

              </div>
        </div>
      
      <div className="page orders hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    changePage('home')
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
                      changePage('allOrders')
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
                    changePage('home')
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
                      changePage('order-single')
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
                    changePage('home')
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
                      Customer
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
                        <div className="contact">
                          <div className="phone-number">+1 365 688 2276</div>
                          <div className="phone-action">P</div>
                        </div>
                        <div className="contact">
                          <div className="phone-number">john.doe@gmail.com</div>
                          <div className="phone-action">M</div>
                        </div>
                      </div>
                  </div>

                  <div className="order-tag-panel">
                    <div className="tag-panel-head">
                      <div className="tag-panel-head-icon">O</div>
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
                        <div className="action button">Fulfill Order</div>
                        <div className="action button">Send Invoice</div>
                      </div>
                  </div>
                </div>
                </div>
              </section>

            </div>
          </div>

        </div>
      </div>
      
      
      <div className="page products hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    changePage('home')
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
                    openSheet('addProduct')
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
            </div>
          </div>

        </div>
      </div>
      <div className="page store hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    changePage('home')
                  }
                }
              >
                <div className="icon"></div>
                <div className="label">Home</div>
              </div>
              <div className="header-title">
                <h3>Store</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <br/>
            </div>
          </div>

        </div>
      </div>
      
      <div className="sheet-cover-black"
        onClick={
          () => {
            closeSheet(history[history.length - 1])
          }
        }
        //react on drag down
        onTouchMove={
          (e) => {
            if (e.touches[0].clientY < 100) {
              closeSheet('addProduct')
            }
          }
        }
      >

      </div>
      
      <div className="navigation">
        <div className="navigation-inner">

          <div className="navigation-button home"
            onClick={
              () => {
                changePage('home')
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Home</div>
          </div>
          <div className="navigation-button orders"
            onClick={
              () => {
                changePage('orders')
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Orders</div>
          </div>  
          <div className="navigation-button products"
            onClick={
              () => {
                changePage('products')
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Products</div>
          </div>
          <div className="navigation-button store"
            onClick={
              () => {
                changePage('store')
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Store</div>
          <div/>

        </div>
        </div>
      </div>
    </div>
  );
}

export default App;