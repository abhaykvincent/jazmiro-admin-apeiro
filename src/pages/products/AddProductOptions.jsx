import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePage, closeSheet } from '../../features/history';

function AddProductOptions() {
    const dispatch = useDispatch();
    return (
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
      
    )
}

export default AddProductOptions
