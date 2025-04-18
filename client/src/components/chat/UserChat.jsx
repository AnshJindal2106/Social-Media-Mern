import React, { useContext } from 'react';
import Input from './Input';
import Messages from './Messages';
import { GeneralContext } from '../../context/GeneralContextProvider';
import { FiArrowLeft } from 'react-icons/fi'; // Back icon

const UserChat = () => {
  const { chatData } = useContext(GeneralContext);

  return (
    <div className="chat">
      {chatData.user && (
        <>
          <div className="chatInfo">
            {/* Mobile back button */}
            <div className="backBtn">
              <FiArrowLeft />
            </div>

            <img src={chatData.user?.profilePic} alt="profile" />

            <div className="chatMeta">
              <span className="chatUsername">{chatData.user.username}</span>
              <span className={`status ${chatData.user?.isOnline ? 'online' : 'offline'}`}>
                {chatData.user?.isOnline ? 'Online' : 'Last seen recently'}
              </span>
            </div>
          </div>

          <Messages />
          <Input />
        </>
      )}
    </div>
  );
};

export default UserChat;
