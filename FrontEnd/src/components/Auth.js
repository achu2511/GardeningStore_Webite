import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from '../features/user';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState(false);
  const [name,setName]=useState('achu+');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const dispatch=useDispatch();


  
  

  function change(a){
    const b1=document.getElementById("login");
    const b2=document.getElementById("sign");
    if(a){
      b2.style.backgroundColor='#ffffffc3';
      b1.style.backgroundColor='rgb(249, 211, 226)';
    }else{
      b1.style.backgroundColor='#ffffffc3';
      b2.style.backgroundColor='rgb(249, 211, 226)';
    }
  }
 
  const handleSignup= async(e)=>{
    e.preventDefault();
    try{
      // console.log(pame);
      const responce=await axios.post('http://localhost:8181/api/v1/auth/register',{name,email,password});
        setState(false);
        setPassword('');
        setEmail('');
        change(true);
    }
    catch(error){
      console.error("Error: " ,error);
    }
  }

  const RegisterForm = (
    <form id="Regform">
      <input type="text" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) }/>
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit" className="btn" onClick={handleSignup}>
        Register
      </button>
    </form>
  );
  const validateEmail = (email) => {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    return pattern.test(email);
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    try{
      const responce=await axios.post("http://localhost:8181/api/v1/auth/authenticate",{email,password});
      navigate('/home');
      let token=responce.data.token;
      let user=responce.data.user;
      localStorage.setItem('email',responce.data.user.email);
      localStorage.setItem('token',token);
      console.log(localStorage.getItem("token"));
      localStorage.setItem('user',JSON.stringify(user));
      // Handlename();
      dispatch(login(
        {name: user.name}
      ))
    }
    catch(error){
      console.error("Error: " ,error);
      alert("Username/Password is Incorrect, If Not Registered Please");
    }
    setEmailError('');
  }


  const LoginForm = (
    <form id="loginform">
      {/* <input type="text" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)}/> */}
      <div>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value) }/>
        {emailError && <p className="error-message">{emailError}</p>}
      </div>

      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit" className="btn" onClick={handleFormSubmit}>
        Login
      </button>
      <a href="/#">Forgot password</a>
    </form>
  );

  
  


  return (
    <div className="log1">
      <div className="acc-page">
        <div className="form-container">
          <div className="form-btn">
            <div className="re-conti">
              <div className="re-login" id="login" onClick={() => {setState(false);change(true);}}>Login</div>
              <div className="re-sign" id="sign" onClick={() => {setState(true);change(false)}}>Register</div>
            </div>
            
            <hr id="indicator" />
            {state ? RegisterForm : LoginForm}
          </div>
        </div>
      </div>
    </div>
  );
}
