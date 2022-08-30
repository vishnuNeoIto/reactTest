import React from "react";

import './style.css'
import avatar from '../assets/female.png';

export default function BadgeItem({userData}){
console.log(userData);
const age  = 10;
    return (
        <>
            <div className="badge-wrapper">
                <div className="profile-image">
                    <img src={avatar}  alt="Profile Pic"    />
                    <div className="age"> { userData?.age } Years</div>
                </div>
                <div>
                    <h3>{ userData?.name }</h3>
                    <div className="status">{ userData?.name }</div>
                    <div className="created-at">Created at</div>
                </div>
            </div>
        </>
    )
}