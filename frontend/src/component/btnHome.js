import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/btnhome.css'
function btnHome() {
  return (
   /* From Uiverse.io by barisdogansutcu */ 
   <div>
<NavLink className="btnhome">
<div class="svg-wrapper">
  <svg height="60" width="190" xmlns="http://www.w3.org/2000/svg">
    <rect class="shape" height="60" width="190"></rect>
    </svg>
    <div class="text">Shop now</div>
</div>
</NavLink>
</div>
  )
}

export default btnHome
