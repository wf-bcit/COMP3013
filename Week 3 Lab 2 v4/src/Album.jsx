export function AlbumMain({name, coverImg, tracks}){
//Create a main section for an album and it's tracks
    return (
    <div className="albumMain-section">
        <div>
            <h2>{name}</h2>
        </div>
        <div className="albumMain-sub-section">
            <img src={coverImg} alt="album cover big" />
            <ol>{tracks.map((track) => (<li><span className="track">{track}<img src="https://clipart-library.com/images/8czn5zKKi.png" className="play-song-icon" alt="play song icon" /></span></li>))}</ol>
        </div>
    </div>
    );
}

export function AlbumSub({id, name, coverImg}){
//Create a sub section for an album name and cover
    return (

    <div className="albumSub-section">
        <button id={id}><img src={coverImg} alt="album cover small" /></button>
        <h3>{name}</h3>
    </div>
    );
}


