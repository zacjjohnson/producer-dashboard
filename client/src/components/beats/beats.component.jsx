
import { useDropboxChooser } from 'use-dropbox-chooser';
import './beats.styles.css';
import dropboxLogo from '../../assets/Dropbox_Icon.svg.png';
import { useState } from 'react';


  function Beats() {

    // const [ beatsFromDropbox, setBeatsFromDropbox ] = useState(null);

       let beatsFromDropbox = [];

    const { open, isOpen } = useDropboxChooser({
      appKey: 'voxbiyjxw9yt7tk',
      chooserOptions: { multiple: true, linkType: 'direct', multiselect: true },
      onSelected: files => {
        beatsFromDropbox.push(files);
        
        
      },
    });

   

    
    

  
    return (
      <>
      <div className="display-beats">
        
        

      </div>
      <div className="upload-beats">

        <button className="dropbox-button" onClick={open} disabled={isOpen}>
          <img className="dropbox-logo" src={dropboxLogo} alt="dropbox logo" />
          Choose from Dropbox
        </button>

      </div>
      </>
    )
  }


  export default Beats;