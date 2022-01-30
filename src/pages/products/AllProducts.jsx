import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePage, openSheet } from '../../features/history';

function AllProducts() {
    const dispatch = useDispatch();
    let productsList=useSelector(state=>state.products.data);
    return (
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
      
    )
}

export default AllProducts
