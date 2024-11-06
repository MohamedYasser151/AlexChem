import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import img from './image/broken.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./css/Heart.css";
import { useTranslation } from 'react-i18next';

const CartItem = ({ data, setData, removeFromCart,handleClick }) => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  // useEffect(() => {
  //   const login = Cookies.get('login');
  //   if (login !== 'true') {
  //     navigate('/signin');
  //   }
  // }, [navigate]);

  useEffect(() => {
    const storedHeart = JSON.parse(localStorage.getItem('heart')) || [];
    setData(storedHeart);
    const total = storedHeart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setPrice(total);
  }, [setData]);

  const [price, setPrice] = useState(0);

  
  


 

  return (
  
      <>
        {data.length === 0 ? (
          <div style={{width:"100%", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <img src={img} alt="" className='imagescartadd'/>
            <button className="button" style={{background:"rgb(139, 113, 255)", color:"#fff", width:"150px", border:"none", borderRadius:"20px"}}>
              <NavLink to="/product" style={{color:"#fff"}}> Shop by Category</NavLink>
            </button>
          </div>
        ) : (
          <> 
         
        
            {data.map((item, i) => (
                <div  key={item.id}>
             
<div class="cardwi">
  <div class="image_container">
    <img src={item.img} class="image" />
      
    
  </div>
  <div class="title">
    <span>New brand name</span>
  </div>

  <div class="action">
    <div class="price">
      <span>$299</span>
    </div>
    <button class="cart-button" onClick={()=>handleClick(item)}>
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span>Add to cart</span>
    </button>
  </div>
</div>

                 
                      </div>
                    
            ))}
                  
  
  
          </>
        )}
      </>
  
  );
};

export default CartItem;
