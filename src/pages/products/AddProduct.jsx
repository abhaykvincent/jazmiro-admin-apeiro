import React,{useState,useEffect} from 'react'
import { openSheet,closeSheet } from '../../features/history';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct } from '../../features/products';

function AddProduct() {
    const dispatch = useDispatch();

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productAvailable, setProductAvailable] = useState(0);

    const [productSaveActive, setProductSaveActive] = useState(false);

    useEffect(() => {
          let flag =false;
          // form validation
          if(productName.length<3){
            flag=true;
          } 
          if(productDescription.length<3){
            flag=true;
          }
          if(productPrice.length<1){  
            flag=true;
          }
          console.log(flag)
          if(flag == false){
            setProductSaveActive(true);
          }
          else{
            setProductSaveActive(false);
          }
      }, [productName, productDescription, productPrice]);

    const newProductStore= useSelector(state=>state.products.newProduct)

    const updateStoreNewProduct = () => {
      if(newProductStore.name !== undefined) {

      }
      else{
        const newProduct = {
          name: productName,
          description: productDescription,
          price: productPrice
        }
        dispatch(addNewProduct(newProduct));

      }
    }

    return (
        <div className="sheet addProduct hide">
          <div className="sheet-inner">

          {/* Sheet Header 
              OnDragDown sheel will collapse the
          */}
          <div className="sheet-header"
            onTouchMove={
              (e) => {
                if (e.touches[0].clientY < 100) {
                  dispatch(closeSheet());
                }
              }
            }
          >
            <div className="sheet-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    dispatch(closeSheet());
                  }
                }
              >Cancel</div>
              <div className="header-title">
                <h3>Add product</h3>
              </div>
              <div className="option"
                onClick={
                  () => {
                    if(productSaveActive) updateStoreNewProduct()
                  }
                }
                style={{
                  opacity: productSaveActive ? 1 : 0.2
                }}
              >Save</div>
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
                        <input type="text" className="editable-content" placeholder="Add Product"
                          value={productName}
                          onChange={
                            (e) => {
                              setProductName(e.target.value)
                            }
                          }
                        />
                      </div>
                      <div className="description"></ div>
                    </div>
                    <div className="input product-description">
                      <div className="label">
                        <input type="text" className="editable-content" placeholder="Add description"
                          value={productDescription}
                          onChange={
                            (e) => {
                              setProductDescription(e.target.value)
                            }
                          }
                        />
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
                        <input type="text" className="editable-content" placeholder="$0.00"
                          value={productPrice}
                          onChange={
                            (e) => {
                              setProductPrice(e.target.value)
                            }
                          }
                        />
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
                        <div className="counter-button minus"
                          onClick={
                            () => {
                              if (productAvailable > 0) {
                                setProductAvailable(productAvailable - 1)

                              } 
                            } 
                          }
                        >
                          <div className="icon"></div>
                        </div>
                        <div className="counter-input">
                          <input type="text" placeholder="0"
                            value={productAvailable}
                            onChange={
                              (e) => {
                                setProductAvailable(e.target.value)
                              }
                            }
                          />
                        </div>
                        <div className="counter-button add"
                          onClick={
                            () => {
                              setProductAvailable(parseInt(productAvailable) + 1)
                            }
                          }
                        >
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
                      <div className="button secondary option-action"
                        onClick={
                          () => {
                            dispatch(openSheet('addOption'))
                          }
                        }
                      >View options</div>
                    </div>
                </section>
              </div>
            
            </div>
          </div>

              </div>
        </div>
      
    )
}

export default AddProduct
