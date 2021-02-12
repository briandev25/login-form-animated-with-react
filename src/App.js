
import './App.css';
import LoginForm from './Components/Login/LoginForm'
import RegisterForm from './Components/Register/RegisterForm'
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';


function App() {
  const [registrationFormStatus,setRegistrationFormStatus] = useState(false);

const loginprops =useSpring({
   left : registrationFormStatus ? -500 : 0,
   
})
const registerprops =useSpring({
  left : registrationFormStatus ? 0 : 500,

  
})

const loginBtnProps = useSpring({
  borderBottom: registrationFormStatus 
    ? "solid 0px transparent"
    : "solid 2px #1059FF",  //Animate bottom border of login button
});
const registerBtnProps = useSpring({
  borderBottom: registrationFormStatus
    ? "solid 2px #1059FF"
    : "solid 0px transparent", //Animate bottom border of register button
});

 const registerClicked =()=>{
    setRegistrationFormStatus(true)
  }
  const loginClicked =()=>{
    setRegistrationFormStatus(false)
  }
  return (
       <div className="login-register-wrapper">
        <div className='nav-buttons'> 
        <animated.button onClick={loginClicked} id="loginBtn"style={loginBtnProps}>Log In</animated.button>
        <animated.button onClick={registerClicked} id="registerId" style={registerBtnProps}>Register</animated.button>
        </div>
        <div className="form-group">
          <animated.form action='' id='loginform' style={loginprops}><LoginForm /></animated.form>
         <animated.form action='' id="registerform" style={registerprops}><RegisterForm /></animated.form> 
        </div>
        <animated.div className="forgot-panel" style={loginprops}><a href='/#'>Forgot password</a></animated.div>
        <div></div>
    </div>
    

  );
}

export default App;
