import React,{useEffect, useState} from 'react'
import Cookies from 'js-cookie';
import { useNavigate ,NavLink} from 'react-router-dom';
import axios from 'axios';
import styleess from './cssemp/employee.module.css'
function Employee() {
  const [data , setData] =useState([]);
  useEffect(()=>{
    fetch('https://fashion-server-mu.vercel.app/clothes')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  })

  

  const groupDataByEmail = (data) => {
    const groupedData = {};
    data.forEach(item => {
      if (!groupedData[item.email]) {
        groupedData[item.email] = [item];
      } else {
        groupedData[item.email].push(item);
      }
    });
    return groupedData;
  };
  
  const groupedData = groupDataByEmail(data);


  const navigate = useNavigate();

  useEffect(() => {
  
    const login = Cookies.get('loginemp');
    if (login !== 'true') {
      
      navigate('/signinEmp');
    }
  }, [navigate]);


  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://fashion-server-mu.vercel.app/remove/${id}`);
      window.location.reload();
    } catch (err) {
      console.error("Error deleting record:", err);
    }
  };
  
 
  return (
    <div className={styleess.bodyenplo}>
      
      <div className={styleess.tablee}>
      <h1 className={styleess.h1}>
        Fashion Wave
      <NavLink to="/Employyee2"> add to cart</NavLink>

      </h1>
      <table>
        <thead>
          <tr>
          <th>Email</th>
            <th>id</th>
            <th>name</th>
            <th>image</th>
            <th>price</th>
            <th>quantity</th>
            <th>size</th>
            <th>number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(groupedData).map(email => (
          <React.Fragment key={email}>
            <tr>
              <td>{email}</td>
              <td colSpan="7"></td> 
            </tr>
            {groupedData[email].map((item, i) => (
              <tr key={i}>
                <td></td> 
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={item.image} alt="" className={styleess.image}/></td>
                <td>{item.result} EGP</td>
                <td>{item.quantity} EGP</td>
                <td>{item.size}</td>
                <td>{item.number}</td>
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

export default Employee
