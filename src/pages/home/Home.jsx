import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPageHistory, changePage } from '../../features/history';

function Home() {
  let ordersList=useSelector(state=>state.orders.allOrders);  
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
                {
                  
                  ordersList.map((order,index)=>{
                    console.log(order)
                  return <div className="order" key={index}
                    onClick={
                      () => {
                        dispatch(changePage('order-single'));
                      }
                    }>
                    <div className="meta">
                      <div className="order-id">{order.id}</div>.
                      <div className="order-time">{order.orderTime}</div>
                    </div>
                    <div className="body">
                      <div className="order-info">
                        <div className="order-info-customer">{
                          //convert string to charecter limit and 3 . at the end
                          //customer name
                          order.customer.name.length > 30 ? order.customer.name.substring(0, 30) + '...' : order.customer.name
                        }</div>
                        <div className="order-tags"></div>
                      <div className="order-items">{order.items.length} Item</div>
                      </div>
                      <div className="order-price">${order.payment.priceSummary.total}.00</div>
                    </div>
                  </div>
                
                
                  })
                }</section>

              <p className="developed-at-apeiro">Developed at Apeiro Inc.</p>
            </div>
          </div>
        </div>
      </div>
     
    )
}

export default Home
