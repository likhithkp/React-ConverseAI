import React from 'react';
import "../styles/Sidebar.css";
import Logo from "../assets/logo.png"
import Add from "../assets/add-30.png"
import msgIcon from "../assets/message.svg"
import home from "../assets/home.svg"
import saved from "../assets/bookmark.svg"
import upgrade from "../assets/rocket.svg"

const Sidebar = () => {
  return (
    <div className='sideBar'>
        <div className="top">
            <div className="brand">
                <img src={Logo} alt="logo"/>
                <span className="brandName">ConverseAI</span>
            </div>
            <button className='newChatBtn'>
                <img src={Add} alt="new chat" />
                New Chat
            </button>
            <div className="inbuiltQuery">
                <button className="query">
                    <img src={msgIcon} alt="First query" />
                    What is programming ?
                </button>
                <button className="query">
                    <img src={msgIcon} alt="First query" />
                    How to use an API ?
                </button>
            </div>
        </div>
        <div className="bottom">
            <div className="listItem">
                <img src={home} alt="home" className='listItemImg'/>
                Home
            </div>
            <div className="listItem">
                <img src={saved} alt="saved" className='listItemImg'/>
                Saved
            </div>
            <div className="listItem">
                <img src={upgrade} alt="Upgrade to Pro" className='listItemImg'/>
                Upgrade to Pro
            </div>
        </div>
    </div>
  )
}

export default Sidebar