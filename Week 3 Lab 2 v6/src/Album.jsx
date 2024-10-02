import { useState } from "react";

export function AlbumMain({name, coverImg, tracks}){
//Create a main section for an album and it's tracks
    return (
    <div className="albumMain-section">
        <div>
            <h2>{name}</h2>
        </div>
        <div className="albumMain-track-section">
            <img src={coverImg} alt="album cover big" />
            <ol>{tracks.map((track) => (<li><span className="track">{track}<img src="https://clipart-library.com/images/8czn5zKKi.png" className="play-song-icon" alt="play song icon" /></span></li>))}</ol>
        </div>
    </div>
    );
}

export function AlbumSub({id, name, coverImg}){
//Create a sub section for an album name and cover
    return (
    <li className="album-list-line-item"><button id={id}><img src={coverImg} alt="album cover small" /></button>{name}</li>
    );
}


export function AlbumList({albums}) 
{
  const [albumName, setAlbumName] = useState('');
  const [coverURL, setCoverURL] = useState('');
  const [listOfAlbums, setListOfAlbums] = useState(albums);

  const albumNameEntry = (e) => {setAlbumName(e.target.value)};
  const coverURLEntry = (e) => {setCoverURL(e.target.value)};
  const albumAdd = () =>
  {
    let count = listOfAlbums.length;
    setListOfAlbums( [ ...listOfAlbums, { id: count, name: albumName, coverImg: coverURL, tracks: ["Track1", "Track2", "Track3", "Track4"] } ] );
    setAlbumName('');
    setCoverURL(''); 
  };

  return (
    <>
      <div className="add-album-section">
        <h3>Add Album:</h3>
        <input className="album-input" value={albumName} onChange={albumNameEntry} placeholder="Add Album"/>
        <input className="album-input" value={coverURL} onChange={coverURLEntry} placeholder="Cover URL"/>
        <button className="album-input" onClick={albumAdd}>ADD</button>
      </div>
      <ul className="album-list-section">
        {listOfAlbums.map(album => (
        <AlbumSub
          id={album.id}
          name={album.name}
          coverImg={album.coverImg} 
        />
      ))}
      </ul>
    </>
  );
}