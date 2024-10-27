import React,{useState,useEffect, lazy, Suspense,startTransition } from 'react';

import { Routes,Route,BrowserRouter} from "react-router-dom";



// import Navbars from './component/Navbars';
// import Footer from './component/footer';


import Loading from './component/Loading.js';
import Nefertari from './component/Nefertari.js';
import CartItem from './component/CartItem.js';
import Cards from './component/Cards';
import Form from './component/form.js';
import Empcart from './component/employee/Empcart.js'
import PricesEditor from './component/PricesEditor.js';
import './App.css';



const Home = lazy(()=> import('./component/Home.js'))
const Navbars = lazy(()=> import('./component/Navbars.js'))
const Footer = lazy(()=> import('./component/Footer.js'))
const AllCard = lazy(()=> import('./component/AllCard.js'))
// const Quantity = lazy(()=> import('./component/quantity.js'))







const App = ()=>{
  const [showNefertari, setShowNefertari] = useState(true);

  {useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowNefertari(false)
    },4000)
  })}



  
  const [warning , setWarning] = useState(false); 
  const [cart, setCart] = useState([]);
  

  const removeFromCart = (productIndex) => {
    const updatedCart = cart.filter((_, index) => index !== productIndex);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleClick = (product) => {
   
    const updatedCart = [...cart, product];
    const isPresent = cart.some((item) => item.id === product.id);

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  return (
    
    <BrowserRouter>
    
    <div className="App">
    
      
   
        <Routes>
      
        {/* <Route path="/" element={<Signin/>}/> */}
        {/* <Route path="/" element={
           <React.Suspense fallback={<Loading/>}>
          

          {showNefertari ? (
         <Nefertari />
       ) : (
         <>
           <Navbars />
           <Home />
         </>
       )}


          </React.Suspense>
          }/> */}
        {/* <Route path="/" element={<Home/> }/> */}


        <Route path="/" element={
           <React.Suspense fallback={<Loading/>}>
           <Navbars size={cart.length}  />
           <Home handleClick={handleClick}/>
           
          </React.Suspense>
          }/>
        <Route path="/home" element={
           <React.Suspense fallback={<Loading/>}>
           <Navbars size={cart.length}  />
           <Home handleClick={handleClick}/>
           
          </React.Suspense>
          }/>
      

      <Route path="/Employyee2" element={<Empcart/>}/>
      <Route path="/PricesEditor" element={<PricesEditor/>}/>
      {/* <Route path="/Quantity" element={<Quantity/>}/> */}


         {/* <Route path="*" element={
          <div>
          

         <NotFound/>
         </div>
         }/> */}
          
        
          <Route path="/form" element={<Form />} />

       
         
          <Route path="/cartitem" element={
            <div>
             {/* <Navbars size={cart.length}  /> */}

          <CartItem data={cart} removeFromCart={removeFromCart} setData={setCart} handleClick={handleClick} />
          </div>
          } />
          {
            warning && alert("Item is already added to cart")
          }

<Route path="/success" element={<h1>تم الإرسال بنجاح!</h1>} />


<Route path="/product" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              
             < AllCard handleClick={handleClick}/> 
             
              {/* {
                warning && <div className="warning">Item is already added to cart</div>
              } */}
          {/* <Footer/> */}
          </div>
          </React.Suspense>
          } />


       

        </Routes>
        
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
