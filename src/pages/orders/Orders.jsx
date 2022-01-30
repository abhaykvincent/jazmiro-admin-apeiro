import React,{useState}  from 'react'
import { useDispatch } from 'react-redux'
import { changePage } from '../../features/history';



function Orders() {
    const dispatch = useDispatch()
    const [customerName, setCustomerName] = useState('John Doefghokff');
    return (
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
                      dispatch(changePage('allOrders'));
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
      
    )
}

export default Orders
