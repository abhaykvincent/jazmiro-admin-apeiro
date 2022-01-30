import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePage, openSheet } from '../../features/history';

function Products() {
  //dispatch to open sheet
    const dispatch = useDispatch();
    let productsList=useSelector(state=>state.products.data);
    return (
        <div className="page products hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    dispatch(changePage('home'))
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
                    dispatch(changePage('allProducts'))
                  }
                }
              >
                <div className="menu-icon"></div>
                <div className="menu-title">All Products</div>
                <div className="menu-action"></div>
              </div>
              <div className="quick-menu"   
                onClick={
                    () => { dispatch(test())
                    }   
                }
              >
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
                          return (<div className="product" >
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
      
    )
}

export default Products
