
import { useDropboxChooser } from 'use-dropbox-chooser';
import './beats.styles.css';
import dropboxLogo from '../../assets/Dropbox_Icon.svg.png';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';


const API_URL = "http://localhost:5005";


function Beats() {
  
  const defaultFormFields = {
    name: '',
    link: '',
  };
    const { user, storedToken } = useContext(AuthContext); 
    const [ beatsFromDropbox, setBeatsFromDropbox ] = useState(defaultFormFields);
    const [ errorMessage, setErrorMessage ] = useState(undefined);
    const navigate = useNavigate();
    const { name, link} = beatsFromDropbox;

    // axios.get(`${API_URL}/auth/verify`, { headers: { Authorization: `Bearer ${storedToken}`} }).then((result) => {
    //   console.log(result)
    // })

    const resetBeatsFromDropbox = () => {
      beatsFromDropbox(defaultFormFields);
    };

    // ======= Dropbox Call ================

    const { open, isOpen } = useDropboxChooser({
      appKey: 'voxbiyjxw9yt7tk',
      chooserOptions: { multiple: true, linkType: 'direct', multiselect: true },
      onSelected: files => {
        const [ { name, link } ] = files
        setBeatsFromDropbox({name, link});
        console.log(files)
        
      },
    });

    console.log(user)
   
    const handleBeatSubmit = (event) => {
      event.preventDefault();
      const requestBody = { name, link, user: user._id };
        axios.post(`${API_URL}/beats`, requestBody)
        .then((response) => {
            console.log(response)
            navigate('/');
            resetBeatsFromDropbox();

        }).catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
        })
    }

    const handleChange = (event) => {
      console.log(event)
      const { name, value } = event.target;
      setBeatsFromDropbox({ ...beatsFromDropbox, [name]: value });
  };

    
    

  
    return (
      <>
      <form onSubmit={handleBeatSubmit}>
        
        <input 
        type="text" 
        name='name'
        value={name}
        placeholder='Name of Beat'
        onChange={handleChange}
        />
        <br></br>
        <input
        type='text'
        name='link'
        value={link}
        placeholder='Link to Audio'
        onChange={handleChange}
        />
        <br></br>
        <button>Create Beat</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <div className='button-container'>
          <button className="dropbox-button" onClick={open} disabled={isOpen}>
            <img className="dropbox-logo" src={dropboxLogo} alt="dropbox logo" />
            Choose from Dropbox
          </button>
        </div>









      <div className="display-beats">
        
        {/* <div className='beats-info-boxes'>
          <div className='beat-box'>

          <h3>Name of Beat Here</h3>
          <audio 
            controls 
            src='https://dl.dropboxusercontent.com/1/view/z2pq2cg3l5hf0hw/Artists/ZAYH/NEW%20BEATS/WRITA%20BEATS/%20.wav'></audio>
          <button className='add-to-cart'>Add to Cart</button>
          </div>
        </div> */}
      </div>
      
        
      
      </>
    )
  }


  export default Beats;