import { useContext } from "react"
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
const API_URL = 'http://localhost:5005';

const Profile = () => {

    const { isLoggedIn, user } = useContext(AuthContext);

    // const id = user.beats[0].toString();
    // console.log(id);

    axios.get(`${API_URL}/profile`)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

    

    return (
        <>
            <div className="user-profile">
                <h1>{user.name}</h1>
                <h2>{user.beats}</h2>

            </div>
        </>
    )
}

export default Profile;