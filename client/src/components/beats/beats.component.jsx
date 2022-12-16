
import { useDropboxChooser } from 'use-dropbox-chooser';
import './beats.styles.css';
import dropboxLogo from '../../assets/Dropbox_Icon.svg.png';
import { useState, useContext } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
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
    const { name, link } = beatsFromDropbox;


    const resetBeatsFromDropbox = () => {
      setBeatsFromDropbox(defaultFormFields);
    };

    // ======= Dropbox Call ================

    const { open, isOpen } = useDropboxChooser({
      appKey: 'voxbiyjxw9yt7tk',
      chooserOptions: { multiple: true, linkType: 'direct', multiselect: true },
      onSelected: files => {
        console.log(files)
        const [ { name, link } ] = files
        setBeatsFromDropbox({name, link});
        console.log(files)
        
      },
    });

   
    const handleBeatSubmit = (event) => {
      event.preventDefault();
      const requestBody = { name, link, user: user._id };
        axios.post(`${API_URL}/beats`, requestBody)
        .then((response) => {
            console.log(response)
            // navigate('/beats')
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
        <button className='create-beat-button'>Create Beat</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <div className='button-container'>
          <button className="dropbox-button" onClick={open} disabled={isOpen}>
            <img className="dropbox-logo" src={dropboxLogo} alt="dropbox logo" />
            Choose from Dropbox
          </button>
        </div>
      </>
    )
  }


  export default Beats;