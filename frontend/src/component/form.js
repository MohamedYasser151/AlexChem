import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/form.css'
import Cookies from 'js-cookie';

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    number: "",
  });
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartData(storedCart); 
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // التحقق من إدخال الاسم والرقم
    if (!formData.username || !formData.number) {
      alert("يرجى إدخال الاسم ورقم الهاتف");
      return;
    }
  
    try {
    //   const userEmail = Cookies.get('email'); 
      const groupedCartData = cartData.map(item => ({
        id: item.id,
        username: formData.username,
        number: formData.number,
        img: item.img,
        title: item.title,
        quantity: item.number,
        price: item.price,
        // email: userEmail,
      }));
  
      await axios.post('https://alexchem-server.vercel.app/addtocart', {
        data: groupedCartData,
      });
  
      alert("تم إرسال البيانات بنجاح");
      localStorage.removeItem('cart'); 
      navigate('/success'); 
      setTimeout(() => {
        navigate('/');
      }, 5000); 
    } catch (error) {
      console.error('Error sending data:', error.response || error.message || error);
    }
  };
  

  return (
    <div className="all">
    <div className='container2'>
      <h1 className='heading'>AlexChem</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className='input'

          required
        />
        <input
          type="text"
          placeholder="Phone number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className='input'

          required
        />
        <button type="submit" className='login-button'>Send</button>
      </form>
    </div>
    </div>
  );
};

export default Form;
