import React, { useState } from "react";
import { Container } from "react-bootstrap";

export const Profile = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState("");
  // State to store the response from the API
  const [apiResponse, setApiResponse] = useState(null);
  // State to track loading state
  const [loading, setLoading] = useState(false);
  // State to store any errors
  const [error, setError] = useState(null);

  // Function to handle button click
  const handleButtonClick = () => {
    // Reset previous error
    setError(null);
    // Set loading state to true
    setLoading(true);

    // Make POST API call
    fetch(`http://172.31.218.15:5000/api/inboundmessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: inputValue }) // Pass input value as message in the request body
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response)
    })
  };

  return (
    <Container className="mb-5">
      <div className="App" style={{ fontFamily: 'Arial, sans-serif' }}>
        <header className="App-header">
          <h3 style={{ textAlign: 'center' }}>
            What does your diet and budget look like?
          </h3>
        </header>
        <div className="textbox-container" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '20px', 
          backgroundColor: 'white', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          marginTop: '150px' /* Adjust margin-top to move it lower */ 
        }}>
          <input 
            type="text" 
            className="textbox" 
            style={{ 
              flex: 1, 
              padding: '15px', 
              borderRadius: '8px', 
              border: '2px solid #ccc', 
              fontSize: '16px' 
            }} 
            placeholder="I want breakfast items and chicken all for under $25" 
            // Set the value of the input to the state value
            value={inputValue}
            // Update the state value when the input changes
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <button 
            className="send-button" 
            style={{ 
              padding: '15px 25px', 
              border: 'none', 
              borderRadius: '8px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              cursor: 'pointer', 
              transition: 'background-color 0.3s', 
              fontSize: '16px', 
              marginLeft: '10px' 
            }}
            // Call the handleButtonClick function when the button is clicked
            onClick={handleButtonClick}
          >
            {loading ? 'Loading...' : 'Get List'}
          </button>
        </div>
        {/* Display API response */}
        {apiResponse && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <label>{apiResponse}</label>
          </div>
        )}
        {/* Display error message */}
        {error && <div>Error: {error}</div>}
      </div>
    </Container>
  );
};

export default Profile;
