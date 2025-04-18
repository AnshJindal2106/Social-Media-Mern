import React, { useContext, useEffect, useRef, useState } from 'react';
import { GeneralContext } from '../../context/GeneralContextProvider';

const Message = ({ message }) => {
  const { chatData } = useContext(GeneralContext);
  const ref = useRef();
  const [showProfile, setShowProfile] = useState(false);

  const userId = localStorage.getItem('userId');
  const profilePic = localStorage.getItem('profilePic');
  const isOwner = message.senderId === userId;

  const date = new Date(message.date);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours % 12 || 12}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  return (
    <div ref={ref} className={`message ${isOwner ? 'owner' : ''}`}>
      <div
        className="messageInfo"
        onMouseEnter={() => setShowProfile(true)}
        onMouseLeave={() => setShowProfile(false)}
      >
        <img
          src={isOwner ? profilePic : chatData.user?.profilePic}
          alt="profile"
        />
        <span>{formattedTime}</span>

        {!isOwner && showProfile && (
          <div className="profileTooltip">
            <img src={chatData.user?.profilePic} alt="profile" />
            <span className="username">{chatData.user?.username}</span>
            <span className="status">{chatData.user?.status || "Online"}</span>
          </div>
        )}
      </div>

      <div className="messageContent">
        <p>{message.text}</p>
        {message.file && <img src={message.file} alt="attachment" />}
      </div>
    </div>
  );
};

export default Message;
