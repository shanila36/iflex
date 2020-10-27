import React, {useState} from "react";
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import { Button,notification } from "antd";
import { SmileOutlined } from '@ant-design/icons';
import {auth} from "../../firebase";
import { Description } from "@material-ui/icons";

function Login() {
  const openNotification = () => {
    notification.open({
      message: 'Account Successfully Created',
     
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  
  const history = useHistory();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.ibb.co/bbQ053v/Logo-II.png"
          alt=""
        ></img>
      </Link>
      <div className="login__container">
        
        <form>
        <h5>Name</h5>
          <input
          className="text_layout"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <h5>Phone number</h5>
          <input
          className="text_layout"
          placeholder="+88"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          
          <h5>E-mail</h5>
          <input
          
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5 className='pass_text'>Password</h5>
          <input
            className="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Log-in
          </Button>
        </form>
        <p>By clicking on Log-in, you will agree to our Terms & Conditions</p>
        <Button onClick={register} className="login__registerButton" onClickCapture={openNotification} >
          Create New Account
          
        </Button>
      </div>
      <img
        className="illustration_bottom"
        src="https://i.ibb.co/Wcf3nz3/6192.png"
        alt=""
      ></img>
    </div>
  );
}

export default Login;
