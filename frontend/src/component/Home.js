import React, { useRef, useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';

import style from './css/home.module.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import img1 from './image/1.png'
import data from './data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
// import 'swiper/css/pagination';

import './css/styles.css';

// import required modules
import { Grid, Pagination, Autoplay, Navigation } from 'swiper/modules';
 
// images
import  img from "./image/1.png";
import  img2 from "./image/2.png";
import img3 from "./image/3.png"
import img4 from "./image/4.png"
import { useTranslation } from 'react-i18next';




function Home({handleClick}) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // useEffect(() => {
  
  //   const login = Cookies.get('loginkids');
  //   if (login !== 'true') {
      
  //     navigate('/');
  //   }
  // }, [navigate]);
 
  

  
  return (
    <div className={style.bghome}>
      {/* <img src={img1} alt="" /> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${style.mySwiper11}`}
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
       
      </Swiper>
      {/* {data.map((item)=>(
           <div className="col-5 col-md-3 col-lg-2 mx-2 mb-1" >
             <div className="col">
              <div className="">
                <div className={style.cards}>
                    <NavLink to={item.to} key={item.id} className={style.link}>
                    <img src={item.image} className={style.img} />
                    <h6>{item.title}</h6>
                    </NavLink>
                </div>
              </div>
        </div>
        </div>
        ))} */}
        <h1>OUR CATEGORIES</h1>
        <Row xs={2} md={4} className="g-1">
  {data.map((image, idx) => (
    <Col key={idx}>
      <Card style={{border: "none"}}>
        <Card.Img variant="top" src={image.image} className={style.cardimags} />
      </Card>
    </Col>
  ))}
</Row>


    <h1>
    NEW IN
      </h1>

      <Swiper
  slidesPerView={4}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
  spaceBetween={30}
  breakpoints={{
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
  pagination={{}}
  modules={[Grid, Autoplay, Navigation]}
  className={`mySwiper ${style.mySwiperi22}`}
>
  
  <SwiperSlide className={style.SwiperSlide2}>
    <img src={img2} alt="Product Image" />
    {/* <button 
      onClick={() => handleClick({
        id: 50, // Unique product id
        img: img2,
        price: 100 // Add the product's price
      })} 
      className={style.CartBtn2}
    >
      Add to Cart
    </button> */}
  </SwiperSlide>
  <SwiperSlide className={style.SwiperSlide2}>
    <img src={img} alt="Product Image" />
    {/* <button 
      onClick={() => handleClick({
        id: 50, // Unique product id
        img: img2,
        price: 100 // Add the product's price
      })} 
      className={style.CartBtn2}
    >
      Add to Cart
    </button> */}
  </SwiperSlide>
  <SwiperSlide className={style.SwiperSlide2}>
    <img src={img4} alt="Product Image" />
    {/* <button 
      onClick={() => handleClick({
        id: 50, // Unique product id
        img: img2,
        price: 100 // Add the product's price
      })} 
      className={style.CartBtn2}
    >
      Add to Cart
    </button> */}
  </SwiperSlide>
  <SwiperSlide className={style.SwiperSlide2}>
    <img src={img2} alt="Product Image" />
    {/* <button 
      onClick={() => handleClick({
        id: 50, // Unique product id
        img: img2,
        price: 100 // Add the product's price
      })} 
      className={style.CartBtn2}
    >
      Add to Cart
    </button> */}
  </SwiperSlide>
  <SwiperSlide className={style.SwiperSlide2}>
    <img src={img3} alt="Product Image" />
    {/* <button 
      onClick={() => handleClick({
        id: 50, // Unique product id
        img: img2,
        price: 100 // Add the product's price
      })} 
      className={style.CartBtn2}
    >
      Add to Cart
    </button> */}
  </SwiperSlide>
</Swiper>

  
      
      <MDBFooter className='bg-light text-center text-white ' style={{marginTop:"30px"}} >
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
        <FontAwesomeIcon icon={faFacebook} />
        </MDBBtn>

         
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
<FontAwesomeIcon icon={faInstagram} />
</MDBBtn>

          

         
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='text-white' href='#'  style={{textAlign:"none"}}>
        AlexChem      
          </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Home

