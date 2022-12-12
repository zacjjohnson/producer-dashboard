import './artists.styles.css';


const Artist = ({ artists }) => {
    
    return (
        <div className="artists-list">

            {artists.map(artist => (
                <div className='artists'>
                    <p key={artist.id}>{artist.name}</p>
                </div>
            ))}

        </div>
    )

}
export default Artist;