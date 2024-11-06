import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Container, Nav, Form, Button } from 'react-bootstrap';
import {NavLink,useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import './css/Navbars.css';
// import Img from './image/icon.png'
const  Navbars = ({size,heart}) => {
  const [login, setLogin] = useState(false);
  const [filter ,setFilter] = useState('');
  const navigator = useNavigate ()
  const change = (event) =>{
    setFilter(event.target.value);
  } 



  
  // useTranslation
  const { t, i18n } = useTranslation();
  const changeEn = () =>{
    i18n.changeLanguage('en')
}
const changeFr = () =>{
    i18n.changeLanguage('ar')
}

  const handleClick = (e) =>{
    e.preventDefault();
    const lowercase = filter.toLowerCase();
    if(lowercase  === "product"){
      navigator("/product");
    }
    else if(lowercase  === "home"){
      navigator("/home");
    }
    else if(lowercase  === "support"){
      navigator("/support");
    }
    else if(lowercase  === "add to cart"){
      navigator("/cartitem");
    }
    else if(lowercase  === "men"){
      navigator("/productMen");
    }
    else if(lowercase  === "women"){
      navigator("/productWomen");
    }
    else if(lowercase  === "kids"){
      navigator("/productKids");
    }
    else{
      navigator('*')
    }
    
  }

  const handleRemove = () =>{
    Cookies.remove("login");
    setLogin(false);
    navigator("/Signin")
    window.location.reload()
  }

  return (
    
    <Navbar expand="lg" className=" navbar navbar-light ">
    

      <Container fluid>
      <NavLink to="/home" className='icon' >
        <Navbar.Brand  className='icon2' style={{ fontSize:"30px"}}>
        AlexChem
       </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="navbarScroll " className="Toggle"  />
        <Navbar.Collapse id="navbarScroll ">
          <Nav className="mr-auto  mx-auto my-lg-0" style={{ maxHeight: '100px'}} navbarScroll>
            <NavLink to="/home" className="NavLink"  >{t("Home")}</NavLink>
            <NavLink to="/product" className="NavLink"  >{t("products")}</NavLink>
            {/* <NavLink to="/download" className="NavLink"  >{t("Download App")}</NavLink> */}
            
            <NavLink to="/chatbot" className="NavLink">
            {t("Support Bot")}
            </NavLink>
            {/* <NavLink  className="NavLink" onClick={handleRemove}>{t("Log out")}</NavLink> */}
            <NavLink className="NavLink" onClick={changeFr}>{t("Arabic")}</NavLink>
            <NavLink className="NavLink" onClick={changeEn}>{t("English")}</NavLink>
            <NavLink to="/wishlist"className="NavLink1" ><i class="fa-solid fa-heart heart" ></i><span className="numbercart">{heart}</span></NavLink>
            <NavLink to="/cartitem"className="NavLink" ><i class="fa-solid fa-cart-shopping"></i> <span className="numbercart">{size}</span></NavLink>
          </Nav>

          {/* <Form className="d-flex"  onSubmit={handleClick}>
            <Form.Control
              type="search"
              placeholder={t("Search")}
              className="me-2 search "
              aria-label="Search"
              onChange={change}
            />
            <Button variant="outline-primary " type='submit'>{t("Search")}</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Navbars;
