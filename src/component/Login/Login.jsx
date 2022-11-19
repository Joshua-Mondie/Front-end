import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import '../Login/Login.css'
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../ContextApi/Context";



const Login = () => {

  const {access, setAccess} =useContext(Context);
  const { register, handleSubmit ,reset, formState:{errors},} = useForm({});
  const navigate = useNavigate();


  useEffect(()=>{
    // submitDetails()
        
   
  }, []);

  
  const submitDetails = (data) => {
    // errors("");
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((result) => {
        setAccess(() => {
          return {
            token: result.data.data,
            isLoggedIn: true,
            userId: result.data.authorId,
          };
        })
          console.log(result.data);
        

        localStorage.setItem("app-connect-access", JSON.stringify(result));

        setTimeout(()=> navigate("/profile"), 1000);
        alert(result.data.message);
      })
      .catch((e) => {
        console.log(e.response?.data?.message)
        console.log(e.response?.data)
        // if (e.response.status == 401) {
        //   errors("Account not found");
        //   setServerError(e.response.data.message);
        // }
        alert(e.response.message);
        return (
          <p>{e.response.message}</p>
        )
      });
      reset()
      navigate('/profile')
  };


  return (
      <div className="login-container">
        <div className="cont">
          <p className="welcome" >Welcome back to App Connect</p>

          <h2>Log in</h2>
          <form
            className="login-form"
            accessKey=""
            onSubmit={handleSubmit(submitDetails )}
          >
            <div className="mainemail">
              <FontAwesomeIcon icon={faEnvelope} size={'xs'} />
              <input
                className="Setemail"
                type="email"
                placeholder="Enter Email"
                {...register("email", { required: true })}
                key={{}}
              />
            </div>
            <br />

            <div className="mainemail">
            <FontAwesomeIcon icon={faLock} size={'xs'}  />
              <input
                className="Setpassword"
                type="password"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              />
            </div>


            <h4 className="forget">
              <NavLink to={"/Forgot"}>Forget Password?</NavLink>
            </h4>
            <div className="sub">
              <div className="Login_check">
            <input
                type="checkbox"
                name="site_name"
              />
              <p>Remember me</p>
              </div>
              <div className="Login_btn">
              <button>Login</button>
              </div>
            </div>
          </form>
          <p id="logsignup">
            Don't have an account? <NavLink to={"/signup"}>Sign up</NavLink>
          </p>


          


        </div>

      </div>

  




  );
}

export default Login;









