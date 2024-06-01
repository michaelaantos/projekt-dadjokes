import { useState } from 'react';
import { useEffect } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, disLikes }) => {
  const [allLikes, setAllLikes] = useState(likes);
  const [allDisLikes, setAllDisLikes] = useState(disLikes);

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img className="user-avatar" src={userAvatar} />
              <p className="user-name">{userName}</p>
            </div>
            <p className="joke__text">{text}</p>
          </div>
          <div className="joke__likes">
            <button
              onClick={() => setAllLikes(allLikes + 1)}
              id="btn-up"
              className="btn-like btn-like--up"
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {allLikes}
            </span>
            <button
              onClick={() => setAllDisLikes(allDisLikes + 1)}
              id="btn-down"
              className="btn-like btn-like--down"
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {allDisLikes}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
