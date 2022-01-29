import React from 'react'

import { useDispatch} from 'react-redux';
import { changePage } from '../features/history';
function Navigation() {
    const dispatch = useDispatch();
    return (
    <div className="navigation">
        <div className="navigation-inner">

          <div className="navigation-button home"
            onClick={
              () => {
                dispatch(changePage('home'));
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Home</div>
          </div>
          <div className="navigation-button orders"
            onClick={
              () => {
                dispatch(changePage('orders'));
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Orders</div>
          </div>  
          <div className="navigation-button products"
            onClick={
              () => {
                dispatch(changePage('products'));
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Products</div>
          </div>
          <div className="navigation-button store"
            onClick={
              () => {
                dispatch(changePage('store'));
              }
            }
          >
            <div className="icon"></div>
            <div className="label">Store</div>
          <div/>

        </div>
        </div>
    </div>
    )
}

export default Navigation
