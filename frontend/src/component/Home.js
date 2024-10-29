import React, { useRef, useState ,useEffect} from 'react';
import { useNavigate,NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';

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
import  img from "./image/5.png";
import  img2 from "./image/2.png";
import img3 from "./image/3.png"
import img4 from "./image/4.png"

import flowers from './image/flowers.png'
import flowers2 from './image/flowers2.png'
import Perfume from './image/Perfume.png'
import Aos from 'aos'
import  "aos/dist/aos.css" 
import { useTranslation } from 'react-i18next';

import './css/contact.css'
import style from './css/home.module.css'



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


<div class="stats-containerr">
  <h1 class="stats-title2" data-aos="fade-up">OUR HAPPY CLIENTS </h1>
  
  <div class="flexx">
    <div class="statt">
      <img src={img} alt="" data-aos="fade-up"/>
    </div>
    <div class="statt">
      <img src={img} alt="" data-aos="fade-up"/>
    </div>
    <div class="statt">
      <img src={img} alt="" data-aos="fade-up"/>
    </div>
    <div class="statt">
      <img src={img} alt="" data-aos="fade-up"/>
    </div>
  </div>
</div>

   <div className={style.contact}>
  <h1 className={style.statstitle3} data-aos="fade-up">contact</h1>

<div className="flexcard">
  <NavLink className="socialContainer containerOne" href="#" data-aos="fade-up">
    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
      <path
        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
      ></path>
    </svg>
  </NavLink>

  <NavLink className="socialContainer containerTwo" href="#" data-aos="fade-up">
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      className="socialSvg twitterSvg"
    >
      <path
        d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
      ></path>
    </svg>
  </NavLink>

  <NavLink className="socialContainer containerThree" href="#" data-aos="fade-up">
    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
      ></path>
    </svg>
  </NavLink>

  <NavLink className="socialContainer containerFour" href="#" data-aos="fade-up">
  <i className="fa-brands fa-whatsapp socialSvg2 whatsappSvg"></i>
</NavLink>

</div>

  

    </div>     
      
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







// <h1>OUR CATEGORIES</h1>
// <Row xs={2} md={4} className="g-1">
// {data.map((image, idx) => (
// <Col key={idx}>
// <Card style={{border: "none"}}>
// <Card.Img variant="top" src={image.image} className={style.cardimags} />
// </Card>
// </Col>
// ))}
// </Row>


// <h1>
// NEW IN
// </h1>

// <Swiper
// slidesPerView={4}
// autoplay={{
// delay: 3500,
// disableOnInteraction: false,
// }}
// spaceBetween={30}
// breakpoints={{
// 320: {
// slidesPerView: 2,
// spaceBetween: 20,
// },
// 768: {
// slidesPerView: 3,
// spaceBetween: 30,
// },
// }}
// pagination={{}}
// modules={[Grid, Autoplay, Navigation]}
// className={`mySwiper ${style.mySwiperi22}`}
// >

// <SwiperSlide className={style.SwiperSlide2}>
// <img src={img2} alt="Product Image" />
// {/* <button 
// onClick={() => handleClick({
// id: 50, // Unique product id
// img: img2,
// price: 100 // Add the product's price
// })} 
// className={style.CartBtn2}
// >
// Add to Cart
// </button> */}
// </SwiperSlide>
// <SwiperSlide className={style.SwiperSlide2}>
// <img src={img} alt="Product Image" />
// {/* <button 
// onClick={() => handleClick({
// id: 50, // Unique product id
// img: img2,
// price: 100 // Add the product's price
// })} 
// className={style.CartBtn2}
// >
// Add to Cart
// </button> */}
// </SwiperSlide>
// <SwiperSlide className={style.SwiperSlide2}>
// <img src={img4} alt="Product Image" />
// {/* <button 
// onClick={() => handleClick({
// id: 50, // Unique product id
// img: img2,
// price: 100 // Add the product's price
// })} 
// className={style.CartBtn2}
// >
// Add to Cart
// </button> */}
// </SwiperSlide>
// <SwiperSlide className={style.SwiperSlide2}>
// <img src={img2} alt="Product Image" />
// {/* <button 
// onClick={() => handleClick({
// id: 50, // Unique product id
// img: img2,
// price: 100 // Add the product's price
// })} 
// className={style.CartBtn2}
// >
// Add to Cart
// </button> */}
// </SwiperSlide>
// <SwiperSlide className={style.SwiperSlide2}>
// <img src={img3} alt="Product Image" />
// {/* <button 
// onClick={() => handleClick({
// id: 50, // Unique product id
// img: img2,
// price: 100 // Add the product's price
// })} 
// className={style.CartBtn2}
// >
// Add to Cart
// </button> */}
// </SwiperSlide>
// </Swiper>

