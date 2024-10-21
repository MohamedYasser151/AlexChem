import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  
      await axios.post('http://localhost:8083/addtocart', {
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
    <div>
      <h1>إدخال البيانات الشخصية</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="الاسم"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="رقم الهاتف"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <button type="submit">إرسال البيانات</button>
      </form>
    </div>
  );
};

export default Form;
