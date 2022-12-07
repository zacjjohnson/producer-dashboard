


const Artist = ({ artists }) => {
    
    return (
        <div className="artists-list">

            {artists.map(artist => (
                <p key={artist.id}>{artist.name}</p>
            ))}

        </div>
    )

}
export default Artist;