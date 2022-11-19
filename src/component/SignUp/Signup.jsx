import "../SignUp/Signup.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../image/shake.jpg"
  

const Signup = () => {
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
        <div className="signup">
                <div className="RegDetails">
                    {/* <div className="reg-top">
                    <img src={Logo} alt="" />
                    <h1>Meet App</h1>
                    </div> */}
                    <h2>Create account</h2>

                    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                    <FontAwesomeIcon icon={faUser} size={'xs'}/>
                        <input
                        className="signup-input"
                            type="text"
                            placeholder="Username"
                            {...register("userName", {
                                required: true,
                                maxLength: 25,
                            })}
                        />
                        <p id="instructions">
                            {errors.username?.type === "required" &&
                                "Your name is required"}
                        </p>
                        <p id="instructions">
                            {errors.username?.type === "maxLength" &&
                                "Your name is should not be more than 25 characters long"}
                        </p>
                        </div>
                        
                        <div> 
                             <FontAwesomeIcon icon={faEnvelope} size={'xs'}/>
                        <input
                            className="signup-input"
                            type="email"
                            placeholder="Email Address"
                            {...register("email", {
                                required: true,
                                pattern:
                                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                        />
                        <p id="instructions">
                            {errors.email?.type === "required" &&
                                "Please enter an email address"}
                        </p>
                        <p id="instructions">
                            {errors.email?.type === "pattern" &&
                                "Your email address is not valid"}
                        </p>
                        </div>

                        <div>
                        <FontAwesomeIcon icon={faLock}size={'xs'} />
                        <input
                            className="signup-input"
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                            })}
                        />
                        <p id="instructions">
                            {errors.password?.type === "required" &&
                                "Please enter a password"}
                        </p>
                        <p id="instructions">
                            {errors.password?.type === "pattern" &&
                                "Password must contain letters,Uppercase, Numbers, special character and should not be less than 6 and more than 15 characters"}
                        </p>
                        </div>
                       
                    <div>
                    <FontAwesomeIcon icon={faLock} size={'xs'}/>
                    
                        <input
                            className="signup-input"
                            type="password"
                            placeholder="Confirm Password"
                            {...register("confirmPassword", {
                                required: true,
                                validate: (value) => {
                                    if (watch("password") != value) {
                                        return "Your passwords do no match";
                                    }
                                },
                            })}
                        />
                        <p id="instructions">
                            {errors.confirmPassword?.type === "validate" &&
                                "Password does not match"}
                        </p>
                        </div>
                        <br />
                        <button className="signup-btn" type="submit">Sign up</button>
                    </form>
                  <div className="RegBottom">
                    <p>
                    Already have an account? <NavLink className="log" to="/login">Log in</NavLink>
                </p>
                </div>
                </div>
               
            </div>
        // </div>
    );
};

export default Signup;
