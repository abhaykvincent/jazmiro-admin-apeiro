import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';

function Product() {
     //state to store list of pages
  const [history, setHistory] = useState([]);
  const [customerName, setCustomerName] = useState('John Doefghokff');
  const [orders, setOrders] = useState([1,2,3,4,5,6]);

  const changePage = (page) => { 

    
    document.querySelector('.sheet').classList.remove('active');
    /* document.querySelector('.level-one').classList.remove('active'); */
    if(document.querySelector('.level-one') != null){
      document.querySelector('.level-one').classList.remove('level-one')
    }
    
    document.querySelector('.page.active').classList.add('hide');
    document.querySelector('.page.active').classList.remove('active');

    
    document.querySelector(`.page.${page}`).classList.add('active');
    document.querySelector(`.page.${page}`).classList.remove('hide');
    document.querySelector('.sheet-cover-black').classList.remove('active');
    

  }
  //open spesipic sheet
  const openSheet = (sheet) => {
    let sheetTEMP = [...history, sheet];
    setHistory([...history, sheet]);
    
    if(sheetTEMP.length > 1){
      document.querySelector(`.sheet.${history[0]}`).classList.add('level-one');
      document.querySelector(`.page.active`).classList.add('level-two');
      document.querySelector(`.page.level-one`).classList.remove('level-two');
    }
    document.querySelector('.sheet-cover-black').classList.add('active');
    document.querySelector('.sheet-cover-black').classList.add('level-up');


    document.querySelector('.page.active').classList.add('level-one');

    document.querySelector(`.sheet.${sheet}`).classList.add('active');
    document.querySelector(`.sheet.${sheet}`).classList.remove('hide');
  }
  //close spesipc sheet
  const closeSheet = () => {
    console.log(history[0])
    debugger
    if(history.length > 1){
    document.querySelector(`.sheet.${history[0]}`).classList.remove('level-one');
  } 
  else{

  }
    console.log(history.slice(0, history.length - 1));
    setHistory(history.slice(0, history.length - 1));
    document.querySelector(`.sheet.${history[history.length-1] }`).classList.remove('active');
    // if has class .active in sheet
    if(!document.querySelector(`.sheet`).classList.contains('active')){
    document.querySelector('.sheet-cover-black').classList.remove('active');
    document.querySelector(`.page.active`).classList.remove('level-one');
    }

  }
  //dispatch to open sheet
    const dispatch = useDispatch();
    return (
        <div className="page products hide  ">
        <div className="page-inner">

          <div className="page-header">
            <div className="page-header-inner">
              <div className="header-button"
                onClick={
                  () => {
                    changePage('home')
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
                    openSheet('addProduct')
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
                    changePage('allProducts')
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
                      [1,2,3,4,5].map((product, index) => {
                          return (<div className="product" >
                            <div className="image"></div>
                            <div className="details">
                              <div className="name">Lorem Isps Blue Variant</div>
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

export default Product
