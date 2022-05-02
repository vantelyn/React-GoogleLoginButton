import React, { useEffect } from 'react';
import './style.css'


export const GoogleLoginButton = () => {

  const GOOGLE_CLIENT_ID = '804037409941-1sq7mjt05244u2mpnmln6kilaofalk6a.apps.googleusercontent.com';

  function handleCredentialResponse(response) {
    console.log(response.credential);
  }

  // Paste this script on your index.html:
  // <script src="https://accounts.google.com/gsi/client" async defer></script>
  
  useEffect( () => {
    if(window.google){
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse
      });
      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { 
          type: "standard",
          theme: "filled_blue",
          size: "large",
          text: "continue_with",
          logo_alignment: "left",
          width: '260'
        }
      );
      window.google.accounts.id.prompt();
    }
  },[]);  
  

  return (
    <>
      <div id="buttonDiv"></div>
    </>
  )
};