import React,{useEffect, useState} from 'react'
import { useNavigate ,NavLink} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import styleess from './cssemp/employee.module.css'

function Empcart() {
    const [dataCart , setDataCart]=useState([])
    useEffect(()=>{
        fetch('https://alexchem-server.vercel.app/addtocart')
        .then(res=> res.json())
        .then(cart => setDataCart(cart))
        .catch(err => console.log(err))
      })


      const groupDataByEmail = (data) => {
        const groupedData = {};
        data.forEach(item => {
          if (!groupedData[item.number]) {
            groupedData[item.number] = [item];
          } else {
            groupedData[item.number].push(item);
          }
        });
        return groupedData;
      };
      
      const groupedData = groupDataByEmail(dataCart);
      
      
  const navigate = useNavigate();

  // useEffect(() => {
  
  //   const login = Cookies.get('loginemp');
  //   if (login !== 'true') {
      
  //     navigate('/signinEmp');
  //   }
  // }, [navigate]);
  
  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://alexchem-server.vercel.app/removeCart/${id}`);
      window.location.reload();
    } catch (err) {
      console.error("Error deleting record:", err);
    }
  };
  
  return (
    <div className={styleess.bodyenplo}>
      
    <div className={styleess.tablee}>
    <h1 className={styleess.h1}>
    AlexChem
    

    </h1>
    <table>
      <thead>
        <tr>
        <th>Number</th>
          <th>id</th>
          <th>userName</th>
          <th>image</th>
          <th>title</th>
          <th>quantity</th>
          <th>price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(groupedData).map(number => (
          <React.Fragment key={number}>
            <tr>
              <td className={styleess.email}><h6>{number}</h6></td>
              <td colSpan="7"></td> 
            </tr>
            {groupedData[number].map((item, i) => (
              <tr key={i}>
                <td></td> 
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td><img src={item.img} alt="" className={styleess.image}/></td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}EGP</td>
                <td><button onClick={() => handleRemove(item.id)}>Delete</button></td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>


  

  

</div>
  )
}

export default Empcart
