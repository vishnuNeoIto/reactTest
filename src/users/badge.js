import React from "react";

import { useNavigate } from 'react-router-dom' ;

import './style.css'
import avatar from '../assets/female.png';


export default function BadgeItem({userData}){
const navigate = useNavigate();

console.log(userData);
const viewUser= (id) =>{ 
    let path = `/user/`+userData.id; 
    navigate(path);
  }
const age  = 10;
    return (
        <>
            <div className="badge-wrapper" key={userData?.id} >
                <div className="profile-image">
                    <img src={userData?.avatarUrl}  alt="Profile Pic"    />
                    <div className="age"> { userData?.age } Years</div>
                </div>
                <div>
                    <h3>{ userData?.name }</h3>
                    <div className="status">{ userData?.statusMessage }</div>
                    <div className="created-at">{ userData?.createdAt }</div>
                </div>
                <div>
                    <input type="Button" color="primary" className="px-4"
                        onClick={viewUser} defaultValue="Update"
                        />
                    
                </div>
            </div>
        </>
    )
}