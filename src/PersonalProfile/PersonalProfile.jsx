import React from "react";
import axios from "axios";
import getPhotoUrl from 'get-photo-url'
import { useState, useRef, useEffect } from "react";
import { db } from '../dexie'
import "../PersonalProfile/PersonalProfile.css"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileIcon from "../../src/image/profileimage.png"
const defaultAvatar = () => "https://www.w3schools.com/howto/img_avatar.png";

const PersonalProfile = () => {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        values,
        reset,
        formState: { errors },
    } = useForm();

    const [message, setMessage] = useState('');


    const [profilePhoto, setProfilePhoto] = useState(profileIcon)

    useEffect(() => {
        const setDataFromDb = async () => {
            const profilePhotoFromDb = await db.bio.get('profilePhoto')
            profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb)
        }

        setDataFromDb()
    }, [])

    const updateProfilePhoto = async () => {
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
        await db.bio.put(newProfilePhoto, 'profilePhoto')
    }


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
        navigate('/welcome')
    };



    const handleChange = event => {
        setMessage(event.target.value);

        // 👇️ this is the input field itself
        console.log(event.target);

        // 👇️ this is the new value of the input
        console.log(event.target.value);
    };

    return (
        <div className="personal-profile-main">
            <h1>My Profile</h1>

            <form className="personal-profile-sub-main" onSubmit={handleSubmit()}>
                <div className="profile-section">
                    <div className="personal-top">
                        <div className="profile-image" >
                            <input type="file" accept='image/*' name='photo' id='profilePhotoInput' />
                            <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
                                <div className="profile-photo" role='button' title="Click to edit photo">
                                    <img src={profilePhoto} alt="profile" />
                                </div>
                            </label>
                        </div>
                        <div className="flex-me">
                            <div className="profile-first-group">
                                <label htmlFor="">First Name</label>
                                <div className="profile-name-branch">
                                    <FontAwesomeIcon icon={faUser} size={'xs'} />
                                    <input
                                        className="profile-name"
                                        type="text"
                                        placeholder="First Name"
                                        {...register("firstName", {
                                            required: true,
                                            maxLength: 35,

                                        })}
                                    />
                                </div>
                            </div>

                            <div className="profile-first-group">
                                <label htmlFor="">Last Name</label>
                                <div className="profile-name-branch">
                                    <FontAwesomeIcon icon={faUser} size={'xs'} />
                                    <input
                                        className="profile-name"
                                        type="text"
                                        placeholder="Lastname Name"
                                        {...register("lastName", {
                                            required: true,
                                            maxLength: 35,

                                        })}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-main-date">
                        <label>Birthdate</label>
                        <input type='date'
                            className="profile-date"
                            placeholder='Enter BirthDate'
                            value={values} onChange={handleChange}
                            name='birthdate'
                        />
                    </div>
                    <div className="profile-main-gender">
                        <label htmlFor="Gender">Chose your gender</label>
                        <select className="profile-gender" id="Gender" onChange={handleChange}>
                            <option selected={true} >Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        <div className="gender_check">
                            <input
                                type="checkbox"
                                name="gender_name"
                            />
                            <p>Show my gender on my profile</p>
                        </div>
                    </div>

                    <div className="profile-main-state">
                        <label htmlFor="Gender">Select State</label>
                        <select className="profile-state" name="state" id="state">
                            <option value="" selected="selected">- Select -</option>
                            <option value="Abuja FCT">Abuja FCT</option>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nassarawa">Nassarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>
                            <option value="Outside Nigeria">Outside Nigeria</option>
                        </select>
                    </div>

                    <div className="profile-about-me">
                        <textarea
                            className="profile-note"
                            placeholder="Write something about yourself"
                            name=""
                            id=""
                            cols="30"
                            rows="7"
                        />
                    </div>
                    <div>

                    </div>
                <div className="profile-btnnn">
                    <Link to="/welcome"> <button className="profile-btn">Continue</button> </Link>
                </div>
                
                </div>


            </form >
        </div>
    );
};
export default PersonalProfile;




