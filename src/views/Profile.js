import React from "react";
import { Container } from "react-bootstrap";

export const Profile = () => {
  return (
    <Container className="mb-5">
      {
        /*
        <h1>Profile</h1>
      <p>
        You use will use an ID Token to get the profile information of a
        logged-in user. <strong>This route should be private</strong>.
      </p>
        */
      }
      

      <div className="App" style={{ fontFamily: 'Arial, sans-serif' }}>
      <header className="App-header">
        {/* Your content goes here */}
      </header>
      <div className="textbox-container" style={{ display: 'flex', alignItems: 'center', padding: '20px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: 'auto' }}>
        <input type="text" className="textbox" style={{ flex: 1, padding: '15px', borderRadius: '8px', border: '2px solid #ccc', fontSize: '16px' }} placeholder="Type your message..." />
        <button className="send-button" style={{ padding: '15px 25px', border: 'none', borderRadius: '8px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s', fontSize: '16px', marginLeft: '10px' }}>Send</button>
      </div>
    </div>
    </Container>
  );
};

export default Profile;
