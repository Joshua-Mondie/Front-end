import React from "react";
import '../VerificationLink/Verification.css'
import { NavLink, useNavigate } from "react-router-dom";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Verification = () => {

    
    return (
        <div className="verification-main">
            <FontAwesomeIcon className="my-icon" icon={faCheck} size={'xl'} />
            <h2>A verification link has been sent to your email address</h2>
            
        </div>

    );
}

export default Verification;