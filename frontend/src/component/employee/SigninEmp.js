import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import back from "./back.mp4"
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Cookies from 'js-cookie';
import stylesemp from "./cssemp/signinemp.module.css"
function SigninEmp() {
  const [fordata , setData] = useState({
    name:"",
    password:"",
  })
  const navigate = useNavigate();
  

  const [login, setLogin] = useState(false);



  useEffect(() => {
    const loggedIn = Cookies.get('loginemp');
    if (loggedIn === 'true') {
      setLogin(true);
    }
  }, []);
  const handleChange = (e) => {
    setData({
      ...fordata,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fashion-server-mu.vercel.app/loginemp', fordata);
      const responseData = response.data;
  
      if (responseData && responseData.Message === "Logged in successfully") {
        alert("Data is correct");
        Cookies.set('loginemp', true, { expires: 7 * 24 });
        setLogin(true);
        navigate("/employyee");
      } else {
        alert("Wrong password or email");
      }
      console.log(response);
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login');
    }
  };
  

  
  return (
    <div className={stylesemp.bodyemp}>
      
        <video className={stylesemp.videoBackground} autoPlay muted loop>
        <source src={back} type="video/mp4" />
      </video>
      <div className={stylesemp.containeremp}>
        
        <div className={stylesemp.boxenp}>
          <form onSubmit={handleSubmit} autoCapitalize="off">
            <div className={stylesemp.name}>
          <input type="text" placeholder="Enter Full name" name="name" required onChange={handleChange}/>
          <PersonIcon className={stylesemp.iconuser}/>
          </div>
          <div className={stylesemp.pass}>
          <input type="password" placeholder="Enter password" name="password" required onChange={handleChange}/>
          <LockIcon className={stylesemp.iconlock}/>
          </div>
          <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SigninEmp;
