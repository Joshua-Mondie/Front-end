import React from 'react';
import Sidebar from '../../Sidebar';
import "../Profile/Profile.scss"


const Profile = () => {


    return (
        <div>
            <Sidebar>
                <div className='profile-blog'>
                    <div className='profile-sub1'>
                        <h2>Welcome,Adebayo Tobi</h2>
                    </div>
                    <div className='profile-sub2'>
                    <div className='profile-details'>
                            <h2>Details</h2>
                            <p>Name: Adebayo</p>
                            <p>Email: Adebayotobi@gmail.com</p>
                            <p>Name: Adebayo</p>
                            <p>Gender:Male</p>
                            <p>State:Osun</p>
                        </div>
                        
                        <div className='profile-pics'>
                            <img
                                className='profile-pics-me'
                                src=""
                                alt="" />
                        </div>
                        <div className='profile-me'>
                            <h4>About Me</h4>
                            <p>I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.</p>
                        </div>
                    </div>
                </div>

            </Sidebar>
        </div>
    );
};

export default Profile;