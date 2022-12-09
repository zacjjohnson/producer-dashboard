
import { useDropboxChooser } from 'use-dropbox-chooser';
import './beats.styles.css';
import dropboxLogo from '../../assets/Dropbox_Icon.svg.png';
import { useState } from 'react';


  function Beats() {

    // const [ beatsFromDropbox, setBeatsFromDropbox ] = useState(null);

      //  let beatsFromDropbox = [];

    const { open, isOpen } = useDropboxChooser({
      appKey: 'voxbiyjxw9yt7tk',
      chooserOptions: { multiple: true, linkType: 'direct', multiselect: true },
      onSelected: files => {
        // beatsFromDropbox.push(files);
        console.log(files)
        
      },
    });

   
    // const beatsFromDropbox = () => {
      
    // }
    
    

  
    return (
      <>
      <div className="display-beats">
        
        <div className='beats-info-boxes'>
          <div className='beat-box'>

          <h3>Name of Beat Here</h3>
          <audio 
            controls 
            src='https://dl.dropboxusercontent.com/1/view/z2pq2cg3l5hf0hw/Artists/ZAYH/NEW%20BEATS/WRITA%20BEATS/%20.wav'></audio>
          <button className='add-to-cart'>Add to Cart</button>
          </div>
        </div>
      </div>
      
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