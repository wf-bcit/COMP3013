import { AlbumMain, AlbumSub } from "./Album";
import { albums } from "./data";
import { useState } from "react";



export function AblumList() 
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
      <h3>Add Album:</h3>
      <input value={albumName} onChange={albumNameEntry} placeholder="Add Album"/>
      <input value={coverURL} onChange={coverURLEntry} placeholder="Cover URL"/>
      <button onClick={albumAdd}>Add</button>
      <ul>
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

function App() 
{
  let i=0;

  return (
    <div>

    <h1 className="title-text">COMP3013 - Week 3 Lab 2</h1>
    {
      <AlbumMain
        name={albums[i].name}
        coverImg={albums[i].coverImg} 
        tracks={albums[i].tracks}
      />
    }

    <h2 className="select-text">Select an Album</h2>
    <AblumList />

    </div>  
  );
}

export default App
