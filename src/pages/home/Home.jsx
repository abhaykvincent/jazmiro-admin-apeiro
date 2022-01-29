import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addPageHistory, changePageTest } from '../../features/history';

function Home() {
    const [customerName, setCustomerName] = useState('John Doefghokff');
    const dispatch = useDispatch();
    return (
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
              <section className="welcome"
              >
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
                <div className="date-label title">Orders to fulfill</div>
                <div className="order" 
                onClick={
                  () => {
                    dispatch(changePageTest('order-single'));
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
                    dispatch(changePageTest('order-single'));
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
                    dispatch(changePageTest('order-single'));
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

              <p className="developed-at-apeiro">Developed at Apeiro Inc.</p>
            </div>
          </div>
        </div>
      </div>
     
    )
}

export default Home
