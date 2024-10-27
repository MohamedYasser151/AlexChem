import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
// import data from "./Data";
// import { Button} from "react-bootstrap";
// import Navbars from './Navbars'
// import Footer from './footer'
import "./css/Cards.css"
import axios from "axios";
import { useTranslation } from 'react-i18next';

const  Cards =({item,handleClick})=>{
  const { t, i18n } = useTranslation();
  
  const [sendData,setSendData ] = useState({
    id:item.id,
    img: item.img,
    title: item.title,
    number:item.number,
    discount:item.discount,
    price:item.price,
  })

  

const navigate = useNavigate()

// useEffect(() => {
  
//   const login = Cookies.get('login');
//   if (login !== 'true') {
    
//     navigate('/signin');
//   }
// }, [navigate]);

const handleChange = (e) => {
  setSendData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
  // const handleSubmit = async(e)=>{
  //   e.preventDefault();

  //   axios.post('http://localhost:8083/addtocart',sendData)
  //   .then(res=>
  //     {
  //       console.log(res);
  //       if (res.data && res.data.Message === "Item is already added to cart") {
  //         alert("Product already exists in the cart");
  //     }else{
  //       // navigate('/home')
  //     }
  //     })
  //   .catch(err => console.log(err))


  // }

  const handleAddToCart = () => {
    handleClick(item); // Trigger the handleClick function to add the item to the cart

    // Uncomment and adjust the following code for Axios request to add the product to the cart
    /*
    axios.post('http://localhost:8083/addtocart', sendData)
      .then((res) => {
        console.log(res);
        if (res.data && res.data.Message === 'Item is already added to cart') {
          alert('Product already exists in the cart');
        } else {
          // Use navigate if needed
          // navigate('/home');
        }
      })
      .catch((err) => console.log(err));
    */
  };

  const {id,title,discountCard,img,discount,price,description,button,number} =item;

  return (
    <div className="bodycar">

      {/* <div > */}
              {/* <span>{discountCard}</span>
              <img src={img} className="card-img-top imagecard" onChange={handleChange}/>
              <div className="card-body">
                <div className="alltitle">
                <h5 className="card-title title" onChange={handleChange}>{title}</h5>
                </div>
                <div className="flex">
                <p className="card-textt" onChange={handleChange}>{t("EGP")}{price}</p>
                </div>
                <div className="alltext">
                <span className="card-text description">{description}</span>
                </div>
              </div>
              <div className="btnaddtocart">
              <button onClick={()=>handleClick(item)} className="CartBtn">{t("Add to Cart")}</button>
             <div className="btnbuy"></div>
              {button}
          </div>
              </div> */}
<div className="card">
    <div className="card-img"><img class="img" src={img}/></div>
    <button className="heartbtn">
    <i class="fa-solid fa-heart heart" ></i>
    </button>
    <div className="card-title">{title}</div>
    <div className="card-subtitle">{description}</div>
    <hr className="card-divider"/>
    <div className="card-footer">
        <div className="card-price"><span>$</span> {price}</div>
        <button className="card-btn" onClick={()=>handleClick(item)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
        </button>
    </div>
</div>



             
            </div>
    
    
  
      
    
    
   
   
  );
}

export default Cards;