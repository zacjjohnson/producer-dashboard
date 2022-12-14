import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
const API_URL = 'http://localhost:5005';

const Profile = () => {

    const { isLoggedIn, user } = useContext(AuthContext);
    const [ beats, setBeats ] = useState();    
    
    // Send user id to the backend to use the User.findById
    useEffect(() => {
        const requestBody = { user: user._id };
        axios.post(`${API_URL}/profile`, requestBody)
        .then((response) => {
            
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    
    // useEffect(() => {
    //     axios.get(`${API_URL}/profile`)
    //     .then((response) => {
    //         setbeats(response.data.beats);
    //         console.log({THISDATA: beats})
    //         // const { name, link } = beats;
    //         console.log({BEATS: response.data.beats});
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    // }, []);
    // Get beats from mongo
    
    useEffect(() => {
        axios.get('/profile')
          .then(response => setBeats(response.data.beats))
          .catch(error => console.log(error));
      }, []);
    

    return (
        <>
            <div className="user-profile">
                <h1>{user.name}</h1>
                {/* {beats.map(beat => (
                <li key={beat._id}>
                <h3>{beat.name}</h3>
                <a href={beat.link}>{beat.link}</a>
        </li>
      ))} */}
                

            </div>
        </>
    )
}

export default Profile;