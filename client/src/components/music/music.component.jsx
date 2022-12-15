import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import '../music/music.styles.css'
const API_URL = 'http://localhost:5005';


const Music = () => {

    
    const [ beats, setBeats ] = useState([]); 
    const [ cartItems, setCartItems ] = useState([]);  
    
    
    
    useEffect(() => {
        
        axios.get(`${API_URL}/music`)
          .then(response => setBeats(response.data.beats))
          .catch(error => console.log(error));
        console.log({BREAK: beats})
    }, []);




    return (
        <>
        <div className="music-title-text">
                <h1>Purchase the soundtrack to your next big single</h1>
            </div>

        <div className="music-container">
            <div className="music-left-page">
                <h2>Purchase premade beats, or reach out to me for custom creations as well.</h2>
            </div>

            <div className="music-right-page">
                <h3></h3>
                {beats.map(beat => (
                        <div className="for-sale-beat-container">
                        <li className="onsale-beats" key={beat._id}>
                            <h3>{beat.name}</h3>
                            <audio controls>
                                <source src={beat.link} type="audio/wav"/>
                            </audio>
                            <button onClick={() => setCartItems([...cartItems, beat])} className="add-to-cart">Add To Cart</button>
                        </li>
                        </div>
                    ))}
            </div>
        </div>
                <h3>Cart</h3>
                    {cartItems.map(item => (
                    <li>{item.name}</li>
                    ))}
                    {cartItems.map(item => (
                     <li>
                    {item.name}
                    <button onClick={() => setCartItems(cartItems.filter(i => i !== item))}>Remove</button>
                    </li>
                    ))}
        </>
    )
}


export default Music;