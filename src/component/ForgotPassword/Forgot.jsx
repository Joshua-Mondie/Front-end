import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Redirect from "../ForgotPassword/redirectbg.png"
import '../ForgotPassword/Forgot.css'
import { NavLink, useNavigate } from "react-router-dom";


const Forgot = () => {

    const navigate = useNavigate();
    const {
        watch,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({});
    


    const onSubmit = (data) => {
        axios
            .post("https://jsonplaceholder.typicode.com/users", data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": true,
                },
            })
            
            .then((response) => {
                console.log(response);
            })
            reset()
            navigate('/emailverification')
        };

    return (
        <div className="Forgot">
            <div className="ForgotMain">
            <div className="ForgotCont">
                {/* <div className="ForgotImage">
                    <img src={Redirect} alt="" srcset="" />
                </div> */}
            
                <form  onSubmit={handleSubmit}>
                    <div className="ForgotDetails">
                        <h1 className="forgotpwd">Forgot <br /> Password?</h1>
                        <p>Enter the Email address  associated with your account below</p>
                        <input 
                        className="forget-input"
                        type="email"
                        placeholder="Enter Email Address"
                        {...register("email", { required: true })}
                        key={{}}
                        />
                    </div >

                    <div className="btn-next">
                        <NavLink to="/verification"><button className="next">Next</button></NavLink>
                    </div>
                </form>
            </div>
            </div>
        </div>
        
     );
}

export default Forgot;