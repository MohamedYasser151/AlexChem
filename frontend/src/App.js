import React,{useState,useEffect, lazy, Suspense,startTransition } from 'react';

import { Routes,Route,BrowserRouter} from "react-router-dom";



// import Navbars from './component/Navbars';
// import Footer from './component/footer';


import Loading from './component/Loading.js';
import Nefertari from './component/Nefertari.js';
import CartItem from './component/CartItem.js';
import Wishlist from './component/HeartItem.js';
import Cards from './component/Cards';
import Form from './component/form.js';
import Empcart from './component/employee/Empcart.js'
import PricesEditor from './component/PricesEditor.js';
import './App.css';



const Home = lazy(()=> import('./component/Home.js'))
const Navbars = lazy(()=> import('./component/Navbars.js'))
const Footer = lazy(()=> import('./component/Footer.js'))
const AllCard = lazy(()=> import('./component/AllCard.js'))

const ChatBot = lazy(()=> import('./component/chatbot/chat.js'))
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





  
// heart
  
  const [warning2 , setWarning2] = useState(false); 
  const [heart, setHeart] = useState([]);
  

  const removeFromHeart = (heartIndex) => {
    const updatedHeart = heart.filter((_, index) => index !== heartIndex);
    setHeart(updatedHeart);
    localStorage.setItem('heart', JSON.stringify(updatedHeart));
  };

  const handleClickHeart = (product) => {
   
    const updatedHeart = [...heart, product];
    const isPresent = heart.some((item) => item.id === product.id);

    if (isPresent) {
      setWarning2(true);
      setTimeout(() => {
        setWarning2(false);
      }, 2000);
      return;
    }

    setHeart(updatedHeart);
    localStorage.setItem('heart', JSON.stringify(updatedHeart));
  };

  useEffect(() => {
    const storedHeart = localStorage.getItem('heart');
    setHeart(storedHeart ? JSON.parse(storedHeart) : []);
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
           <Navbars size={cart.length} heart={heart.length}  />
           <Home handleClick={handleClick}/>
           
          </React.Suspense>
          }/>
        <Route path="/home" element={
           <React.Suspense fallback={<Loading/>}>
           <Navbars size={cart.length}  heart={heart.length}/>
           <Home handleClick={handleClick}/>
           
          </React.Suspense>
          }/>
      

      <Route path="/Employyee2" element={<Empcart/>}/>
      <Route path="/PricesEditor" element={<PricesEditor/>}/>
      <Route path="/chatbot" element={
        
        <div>
        <Navbars size={cart.length}  />
        <ChatBot/>
        </div>
        }/>
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
          {/* wishlist heart */}
          <Route path="/wishlist" element={
            <div>
             {/* <Navbars size={cart.length}  /> */}

          <Wishlist data={heart} removeFromCart={removeFromCart} setData={setHeart} handleClick={handleClick} />
          </div>
          } />
          {
            warning2 && alert("!!!!")
          }

<Route path="/success" element={<h1>تم الإرسال بنجاح!</h1>} />


<Route path="/product" element={
          <React.Suspense fallback={<Loading/>}>

          <div>
             <Navbars size={cart.length}  />
              
             < AllCard handleClick={handleClick} handleClickHeart={handleClickHeart}/> 
             
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
