import { GoogleLogin } from 'react-google-login';
import jwt_decode from 'jwt-decode';

const clientId = "Google_client_id";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Success, current user: ", res.profileObj);


    const userProfile = JSON.stringify(res.profileObj);
    const jwt = btoa(userProfile); // Encoding userProfile to Base64


    console.log("User profile encoded in JWT format:", jwt);
  };

  const onFailure = (res) => {
    console.log("Login Failed, response: ", res);
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
