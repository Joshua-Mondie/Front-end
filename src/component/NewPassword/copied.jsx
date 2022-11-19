import React from "react";
import "../SignUp/Signup.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import '../NewPassword/Newpassword.css'
import { useForm } from "react-hook-form";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewPassword = () => {

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
            .put("https://jsonplaceholder.typicode.com/users", data, {
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

        <div className="NewPass_main">
            <div className="NewPass_page">
                <div className="NewPass_key">
                    {/* <FontAwesomeIcon icon={faLock} size={'xl'} /> */}
                    <h2>Reset Password</h2>
                </div>
                <div className="NewPass_input">

                    <form
                        className="NewPassword_form"
                        accessKey=""
                        onSubmit={handleSubmit()}
                    >
                        <div className="NewPassword">
                            <FontAwesomeIcon icon={faLock} size={'xs'} />
                            <input
                                className="SetNewpassword"
                                type="password"
                                placeholder="New Password"
                                {...register("password", { required: true })}
                                key={{}}
                            />
                        </div>
                        <br />

                        <div className="NewPassword">
                            <FontAwesomeIcon icon={faLock} size={'xs'} />
                            <input
                                className="SetNewPassword"
                                type="password"
                                placeholder="Confirm New Password"
                                {...register("password", { required: true })}
                            />
                        </div>
                        <div className="NewPassword_sub">
                            <div className="NewPassword_btn">
                               <NavLink><button>Next</button></NavLink> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewPassword;