import ForgotPassword from "./component/ForgotPassword/Forgot";
import LandingPage from "./component/LandingPage/LandingPage";
import Login from "./component/Login/Login"; 
import Signup from "./component/SignUp/Signup.jsx"
import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import NewPassword from './component/NewPassword/Newpassword.jsx'
import EmailVerification from "./component/EmailVerification/EmailVerification"
import { ContextProvider } from "./component/ContextApi/Context";
import Verification from "./component/VerificationLink/Verification"
import PersonalProfile from "./PersonalProfile/PersonalProfile"
import  Bio from "./component/Bio/Bio"
import Sidebar from "./component/Sidebar/Sidebar"
import "./component/Sidebar/Sidebar.css"
import Profile from "./component/Sidebar/Pages/Profile/Profile";
import Chats from "./component/Sidebar/Pages/Chats/Chats";
import GroupChat from "./component/Sidebar/Pages/Group chat/GroupChat";
import Setting from "./component/Sidebar/Pages/Settings/Settings";
// import Sideapp from "./component/Sidebar/Sideapp"




function App() {
  
  useEffect(() => {
    {
      console.log(localStorage.getItem("app-connect-access"));
      localStorage.getItem("app-connect-access") === null &&
        localStorage.setItem("app-connect-access", JSON.stringify({
          token: "",
          isLoggedIn: false,
          userId: "",
        }));
    }
  }, []);

  return (
    <div className="App">
      <ContextProvider>
      <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/login" element={<Login />} />
       <Route path="/forgot" element={<ForgotPassword />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/confirmpassword" element={<NewPassword />} />
       <Route path="/emailverification" element={<EmailVerification />} />
       <Route path="/verification" element={<Verification />} />
       <Route path="/profile" element={<PersonalProfile />} />
       <Route path="/bio" element={<Bio />} />
       <Route path="/welcome" element={<Sidebar />} />
      <Route path="/myprofile" element={<Profile />} />
     <Route path="/chats" element={<Chats />} />
      <Route path="/groupchat" element={<GroupChat />} />
      <Route path="/setting" element={<Setting />} />
       </Routes>
       </ContextProvider>
    </div>
  );
}

export default App;
