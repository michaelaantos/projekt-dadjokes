import React, { useState } from 'react';
import { Joke } from '../../components/Joke';
import { createRoot } from 'react-dom/client';
import { useEffect } from 'react';
import './style.css';

export const HomePage = () => {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('http://localhost:4000/api/joke');
      const data = await response.json();
      setJoke(data.data);
    };

    fetchJoke();
  }, []);

  return (
    <>
      {joke.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </>
  );
};
