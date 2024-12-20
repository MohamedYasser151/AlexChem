import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import img from './image/broken.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import "./css/Heart.css";
import { useTranslation } from 'react-i18next';

const CartItem = ({ data, setData, removeFromHeart,handleClick }) => {
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

  
  const handleAddToCartAndRemove = (item, index) => {
    removeFromHeart(index);
  
    handleClick(item);
  };
  


 

  return (
    <div style={{marginTop:"150px",width:"100%"}}>

<div className="py-4 container" >
  <div className="row justify-content-center">
  {data.length === 0 ? (
          <div style={{width:"100%", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <img src={img} alt="" className='imagescartadd'/>
            <button className="button" style={{background:"rgb(139, 113, 255)", color:"#fff", width:"150px", border:"none", borderRadius:"20px"}}>
              <NavLink to="/product" style={{color:"#fff"}}> Shop by Category</NavLink>
            </button>
          </div>
          
        ) : (
      data.map((item, i) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id} >
          <div className="cardwi">
            <div className="image-container ">
              <img src={item.img} alt={item.title} className="" />
              <div className="price">
              EGP {item.price}
              </div>
            </div>
            <label className="favorite " onClick={() => removeFromHeart(i)}>
              <input type="checkbox" defaultChecked />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
                <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
              </svg>
            </label>
            <div className="content ">
              <div className="brand ">{item.title}</div>
              <div className="product-name">{item.description}</div>
            
            </div>
            <div className="button-container">
              <button className="buy-button button" onClick={() => removeFromHeart(i)}>Remove</button>
              <button className="cart-button button"onClick={() => handleAddToCartAndRemove(item, i)}>
                <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
</div>
 </div> 

  );
};

export default CartItem;
