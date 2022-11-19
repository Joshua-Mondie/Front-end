import React from "react";
import "../Bio/Bio.css"
import profileIcon from "../../image/avater.png"
import { useState } from "react";
import getPhotoUrl from 'get-photo-url'

const Bio = () => {

    const [profilePhoto, setProfilePhoto] = useState(profileIcon)
    const updateProfilePhoto = async () => {
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto('newProfilePhoto')
    }

    return (
        <div className="bio">
            <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
            <label htmlFor="profilePhotoInput">
                <div className="profile-photo" role="button" title="Click to edit">
                    <img src={profilePhoto} alt="" />
                </div>

            </label>

        </div>
    );
}

export default Bio;