import { AlbumMain, AlbumSub } from "./Album";
import { albums } from "./data";
//import { MyInput } from "./MyInput";
import { List } from "./List2"
import { useState } from "react";


// import { useState } from 'react';

// let nextId = 0;

// function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);
//   const ListFunction = () => { setArtists([...artists, { id: nextId++, name: name }  ]);}

//   return (
//     <div>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={e => setName(e.target.value)}/>
//       <button onClick={ListFunction}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     <div/>
//   );
// }



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
    //setAlbumList(albums);
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

    <List />

    </div>  
  );
}

export default App
