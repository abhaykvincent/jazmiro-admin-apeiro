import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { changePage } from '../../features/history';


function OrderSingle() {

    const dispatch = useDispatch()
    return (
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
      
    )
}

export default OrderSingle
