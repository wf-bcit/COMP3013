import { AlbumMain, AlbumSub } from "./Album";
import { albums } from "./data";
//import { MyInput } from "./MyInput";
//import { List } from "./List2"
import { useState } from "react";

let nextId = 0;

export function AblumList() {
  const [albumName, setAlbumName] = useState('');
  const [coverURL, setCoverURL] = useState('');
  const [listOfAlbums, setListOfAlbums] = useState(albums);

  const albumNameEntry = (e) => {setAlbumName(e.target.value)};
  const coverURLEntry = (e) => {setCoverURL(e.target.value)};
  
  const albumAdd = () => {
    let count = listOfAlbums.length;
    setListOfAlbums( [ ...listOfAlbums, { id: count, name: albumName, coverImg: coverURL, tracks: ["Track1", "Track2", "Track3", "Track4"] } ] ); 
  };

  return (
    <>
      <h1>Add Album:</h1>
      <input value={albumName} onChange={albumNameEntry} placeholder="Add Album"/>
      <input value={coverURL} onChange={coverURLEntry} placeholder="Cover URL"/>
      <button onClick={albumAdd}>Add</button>
      <ul>
        {listOfAlbums.map(album => (
        <AlbumSub
          name={album.name}
          coverImg={album.coverImg} 
        />
      ))}
      </ul>
    </>
  );
}


function ZoopApp()
{
	let [mort, setMort] = useState(1);
  let [albumList, setAlbumList] = useState(albums);

  const Boom = () => {
    setMort(mort+1);
    console.log("BEFORE");
    console.log("albums = ");
    console.log(albums);
    console.log("albumList = ");
    console.log(albumList);
    const albumName_ = "Pinky";//document.getElementById("zoopName");
    const coverURL_ = "https://www.udiscovermusic.com/wp-content/uploads/2017/08/Pink-Floyd-Dark-Side-Of-The-Moon.jpg"; //document.getElementById("zoopURL");
    let albumCount = albums.length;
    let newAlbum = { id: albumCount, name: albumName_, coverImg: coverURL_, tracks: ["Track1", "Track2", "Track3", "Track4"]};
    albums.push(newAlbum);
    console.log("AFTER");
    console.log("albums = ");
    console.log(albums);
    setAlbumList(albums);
    // setBlam(blam.push(newAlbum));
    console.log("albumList = ");
    console.log(albumList);
  };

	return(
	<div>
    <h1>Zoop Begin</h1>
    <input type="text" name="zoopName" id="zoopName" />
    <input type="text" name="zoopURL" id="zoopURL" />
    <button onClick={Boom}>ZOOP</button>
    {albumList.map((album) => (
        <AlbumSub
          name={album.name}
          coverImg={album.coverImg} 
        />
      ))}
    <h1>Zoop ENDS</h1>
	</div>	
	);

}

function App() {

  let i=0;
  let albumName="";
  let coverURL="zoop";

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

    <ZoopApp />

    <AblumList />

    </div>  
  );
}

export default App
