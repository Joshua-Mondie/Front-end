import React , {useState} from "react";
import "../EmailVerification/EmailVerification.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactCodeInput from 'react-code-input';



const EmailVerification = () => {

    const props = {
        inputStyle: {
          fontFamily: 'monospace',
          margin:'4px',
          MozAppearance: 'textfield',
          width: '60px',
          borderRadius: '5px',
          fontSize: '20px',
          height: '60px',
          paddingLeft: '10px',
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid #691f48'
        },
        inputStyleInvalid: {
          fontFamily: 'monospace',
          margin:  '4px',
          MozAppearance: 'textfield',
          width: '40px',
          borderRadius: '3px',
          fontSize: '14px',
          height: '26px',
          paddingLeft: '7px',
          backgroundColor: 'black',
          color: 'red',
          border: '1px solid red'
        }
      }


    const [code , setCode] = useState('');

    const handleSubmit = (e) => {
        console.log(e.target.value)
    }

    const submit = async() => {
        try{
            const res = await axios.post('url' , 'val' , {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": true,
                }, 
            });
            console.log(res.data)
        }catch(err){
            console.log(err?.response?.message)
        }
    }

    return ( 
        <div className="entercode-main"> 
        <div className="enterCode-page">
            <h1>A code has been sent to your email address.Enter the code here</h1>
             
             <div>
                <ReactCodeInput 
                type='number' 
                fields={6} 
                value={code} 
                onChange={handleSubmit} 
                {...props} />
            </div>

             <NavLink to="/profile"> <button className="enterCode-btn">Continue</button></NavLink>
             </div>


        </div>
     );
}
 
export default EmailVerification;