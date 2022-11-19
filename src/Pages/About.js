import React from 'react';
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate();
  return (
    <div>
      About
      <br></br>
      <button onClick={() => navigate('/')}>Go to home page</button>
    </div>
  );
}

export default About;
