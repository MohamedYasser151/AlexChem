import React, { useRef, useState ,useEffect} from 'react';
import { useNavigate,NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';

import style from './css/home.module.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import img1 from './image/1.png'
import data from './data';

import BtnHome from './btnHome';


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
 
import Typed from 'typed.js';

// images
import  img from "./image/1.png";
import  img2 from "./image/2.png";
import img3 from "./image/3.png"
import img4 from "./image/4.png"

import flowers from './image/flowers.png'
import flowers2 from './image/flowers2.png'
import Perfume from './image/Perfume.png'
import Aos from 'aos'
import  "aos/dist/aos.css" 
import { useTranslation } from 'react-i18next';




function Home({handleClick}) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  // useEffect(() => {
  
  //   const login = Cookies.get('loginkids');
  //   if (login !== 'true') {
      
  //     navigate('/');
  //   }
  // }, [navigate]);
 

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  
  useEffect(() => {
    const typed1 = new Typed(textRef1.current, {
        strings: ["Fragrances that"],
        typeSpeed: 50,
        showCursor: false,
    });

    const typed2 = new Typed(textRef2.current, {
        strings: ["attract people"],
        typeSpeed: 50,
        startDelay: 2000, 
        showCursor: false,
    });

    return () => {
        typed1.destroy();
        typed2.destroy();
    };
}, []);


  
  return (
    <div className={style.bghome}>
   <section className={style.sections}>
    <img src={flowers} alt="" className={style.flowersRight} data-aos="fade-left"/>
    {/* <img src={Perfume} alt="" className={style.Perfume} data-aos="fade-left"/> */}
    <span ref={textRef1} className={style.text}></span>
    <span ref={textRef2} className={style.text}></span>

    <BtnHome />
    {/* <img src={flowers2} alt="" className={style.flowersLeft} data-aos="fade-right"/> */}

</section>



     
<div class="stats-container">
  <h1 class="stats-title" data-aos="fade-up">We’re Good with Numbers</h1>
  
  <div class="flexx">
    <div class="stat">
      <h2 data-aos="fade-up">15</h2>
      <p data-aos="fade-up">Years of Experience</p>
    </div>
    <div class="stat">
      <h2 data-aos="fade-up">36</h2>
      <p data-aos="fade-up">Qualified Experts</p>
    </div>
    <div class="stat">
      <h2 data-aos="fade-up">120</h2>
      <p data-aos="fade-up">Clients Every Year</p>
    </div>
    <div class="stat">
      <h2 data-aos="fade-up">9</h2>
      <p data-aos="fade-up">Intl. Partners</p>
    </div>
  </div>
</div>

        



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

