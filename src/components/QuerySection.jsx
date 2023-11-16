import React, {useEffect, useRef, useState} from 'react';
import "../styles/QuerySection.css";
import sendBtn from "../assets/send.svg";
import userIcon from "../assets/user-icon.png"
import logo from "../assets/logo.png"
import { fetchData } from '../openai';

const QuerySection = () => {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am ConverseAI, Tell me what’s on your mind ?",
      isBot:true,
    }
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages])

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([
      ...messages, 
      {text, isBot:false}
    ])
    const res = await fetchData(text)
    setMessages([
      ...messages, 
      { text: text, isBot: false},
      { text: res, isBot:true},
    ])
  }

  const handleEnterKey = async (e) => {
    if(e.key === "Enter") await handleSend();
  }

  return (
    <div className="main">
      <div className='chats'>
        {messages.map((message, i) => {
          return(
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img className='chatImg' src={message.isBot ? logo : userIcon} alt="ConverseAI logo" />
              <p className="resultText">{message.text}</p>
            </div>
          )})}
          <div ref={msgEnd}/>
      </div>
      <div className="footer">
        <div className="input">
          <input type="text" placeholder='Message ConverseAI...' value={input} onKeyDown={handleEnterKey} onChange={(e) => setInput(e.target.value)}/>
          <img onClick={handleSend} id='sendBtn' src={sendBtn} alt="send button" />
        </div>
        <p>ConverseAI may produce inaccurate results about people, places or facts. ConverseAI Version 2023</p>
      </div>
    </div> 
  )
}

export default QuerySection;