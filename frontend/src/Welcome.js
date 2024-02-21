import React from 'react';
import { useNavigate } from 'react-router-dom';
import frontImage from './covid.jpg';

function Welcome() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/signup');
  };

  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${frontImage})`, // Set the background image using the imported variable
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '20px', // Add padding to create space for buttons
        boxSizing: 'border-box', // Include padding in element's total width and height
        position: 'relative' // Ensure absolute positioning is relative to this container
      }}
    >
      <h1
        style={{
          fontWeight: 'bold',
          color: 'black',
          marginBottom: '20px', // Add margin to separate the title from buttons
          fontSize: '50px' // Increase font size of the title
        }}
      >
        IMMUNETRON
      </h1>
      <button
        className='btn btn-success'
        onClick={handleUserClick}
        style={{
          position: 'absolute', // Position the user button absolutely within the container
          top: '100px', // Adjust the top position to place it below the title
          left: '20px',// Adjust the left position
          backgroundColor: 'black', // Set background color to black
          color: 'white',
          border: '1px solid white', // Set border color to white
          fontWeight: 'bold', // Set text weight to bold
          borderRadius: '8px'
        }}
      >
        User
      </button>
      <button
        className='btn btn-danger'
        onClick={handleAdminClick}
        style={{
          position: 'absolute', // Position the admin button absolutely within the container
          top: '100px', // Adjust the top position to place it below the title
          left: '120px', // Adjust the left position to prevent overlap with the user button
          backgroundColor: 'black', // Set background color to black
          color: 'white',
          border: '1px solid white', // Set border color to white
          fontWeight: 'bold', // Set text weight to bold
          borderRadius:'8px'
        }}
      >
        Admin
      </button>
    </div>
  );
}

export default Welcome;



