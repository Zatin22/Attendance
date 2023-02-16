import React, { useRef, useState } from "react";
import {BiSearchAlt} from "react-icons/bi";
import {IoMdNotificationsOutline} from "react-icons/io";
import {FaAngleDown} from "react-icons/fa";
import {FcBusinessman} from "react-icons/fc";
import {BiWalletAlt} from "react-icons/bi";
import {AiOutlineSetting} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";
import "./Home.css";
import dp from "./dp.jpg";

const Home = () => {

  const [open,setOpen] =useState(false);
const admin = [
  {
    icon:<FcBusinessman/>,
    name:"Profile"
  },
  {
    icon:<BiWalletAlt/>,
    name:"My Wallet"
  },
  {
    icon:<AiOutlineSetting/>,
    name:"Setting"
  },
  {
    icon:<BiLogOut/>,
    name:"Log Out"
  }
]

const menuRef = useRef();
const imgRef = useRef();
window.addEventListener("click", (e) =>{
  // console.log(e.target !== menuRef.current);
  if(e.target !== menuRef.current && e.target !== imgRef.current ){
    // setOpen(false);
  }
})

  return (
    <>
      <div className="navbar">
        <div className="searchbar">
          <div className="setsearch">
             <BiSearchAlt/>
              <input className="search"
               placeholder="Search.."
              />
          </div>
        </div>

          <div className="rightele">
               <div className="rightnav">
                  <IoMdNotificationsOutline className="bell" size="1.5em"/>
                    <div className="admin" >
                      {/* <h1>hjbjhb</h1> */}
                          <div className="dp " >
                            <img src={dp} className="indp"
                            style={{height:"35px", width:"35px" ,borderRadius:"50%",
                                         objectFit:"cover"
                                   }}
                             
                              alt=""
                            />
                            
                          </div>
                         <p className="indp" ref={imgRef}   onClick={() => setOpen(!open)}>Admin
                           
                         </p>
                      <FaAngleDown className="" />
                     {
                      open && (
                        <div className="profiledrop">
                        {
                          admin.map((ele) =>(
                            // <div className="profile">
                              <div className="profileicon" ref={menuRef} onClick={() => setOpen(!open)}>
                               {ele.icon}
                               <p>{ele.name}</p>
                              </div>
                            // </div>
                          ))
                        }
                  </div>
                      )
                     }
                    </div>
                      <AiOutlineSetting className="bell" size="1.5em"/>
               </div>
          </div>
      </div>
    </>
  )
};

export default Home;
