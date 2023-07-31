import { GoogleLogout } from 'react-google-login';

const clientId = "Google_client_id";

function Logout(){
    const onSuccess = () => {
        console.log("LogOut Successful");

    }
    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText = {"Logout"}
                onLogoutSuccess = {onSuccess}
            />
        </div>


    )
}

export default Logout;