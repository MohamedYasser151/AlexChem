import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import img from './image/cart33.png';
import "./css/Cartitem.css";

const CartItem = ({ data, setData, removeFromCart }) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const login = Cookies.get('login');
  //   if (login !== 'true') {
  //     navigate('/signin');
  //   }
  // }, [navigate]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setData(storedCart);
    const total = storedCart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setPrice(total);
  }, [setData]);

  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    data.map((item) => (
      ans += item.number * item.price
    ));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [data]);

  const decrease = (id) => {
    setData(prevData => {
      const updatedData = prevData.map(item => (
        item.id === id ? { ...item, number: Math.max(item.number - 1, 1) } : item
      ));
      updateLocalStorage(updatedData);
      return updatedData;
    });
  };

  const increase = (id) => {
    setData(prevData => {
      const updatedData = prevData.map(item => (
        item.id === id ? { ...item, number: item.number + 1 } : item
      ));
      updateLocalStorage(updatedData);
      return updatedData;
    });
  };

  const updateLocalStorage = (updatedData) => {
    try {
      localStorage.setItem('cart', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Error updating localStorage:', error.message || error);
    }
  };

  const handleSubmit = () => {
    if (data.length === 0) {
      alert("عربة التسوق فارغة");
      return;
    }
    navigate('/form'); 
  };

  return (
    <div className="bodyItem">
      <article>
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
              <div className="cartbox" key={i}>
                <div className="cartimg">
                  <img src={item.img} alt="" name={`img[${i}]`} />
                  <p name={`title[${i}]`}>{item.title}</p>
                </div>
                <div className="incdec">
                  <button onClick={() => increase(item.id)}>+</button>
                  <button>{item.number}</button>
                  <button onClick={() => decrease(item.id)}>-</button>
                </div>
                <div className="remoprice">
                  <span name={`price[${i}]`}>EGP {item.price}</span>
                  <button onClick={() => removeFromCart(i)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="total">
              <span className="texttotal">Total price of your cart</span>
              <span className="totalre"> EGP {price}</span>
            </div>
            <button className="btn-31" onClick={handleSubmit}>
              <span className="text-container">
                <span className="textbtnn">Send</span>
              </span>
            </button>
          </>
        )}
      </article>
    </div>
  );
};

export default CartItem;
