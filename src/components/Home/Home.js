import React from 'react';

function Home()  {    
    const handleGetStarted = () => {
        window.location.href = '/cityform';
    };

  return (
    <div>
      <h1>Welcome to the Blue City App!</h1>
      <p>
      Do you want to add cities and list them? let's start
      </p>
      <button onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default Home;