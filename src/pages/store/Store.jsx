import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {changePage} from '../../features/history'



function Store() {
    const dispatch = useDispatch();

  const [history, setHistory] = useState([]);
  const [customerName, setCustomerName] = useState('John Doefghokff');
  const [orders, setOrders] = useState([1,2,3,4,5,6]);
    return (
        <div className="page store hide  ">
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
                <h3>Store</h3>
              </div>
              <div className="option">:</div>
            </div>
          </div>
          <div className="page-content">
            <div className="page-content-inner">
            <section className="quick-menus">

              <div className="quick-menu">
                <div className="menu-icon"></div>
                <div className="menu-title">Customers</div>
                <div className="menu-action"></div>
              </div>
              <div className="quick-menu">
                <div className="menu-icon"></div>
                <div className="menu-title">Discounts</div>
                <div className="menu-action"></div>
              </div>
              <div className="quick-menu">
                <div className="menu-icon"></div>
                <div className="menu-title">Settings</div>
                <div className="menu-action"></div>
              </div>
              <div className="quick-menu">
                <div className="menu-icon"></div>
                <div className="menu-title">Support</div>
                <div className="menu-action"></div>
              </div>

              </section>

            </div>
          </div>

        </div>
      </div>
      
    )
}

export default Store
