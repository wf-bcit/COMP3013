import { AlbumMain, AlbumSub } from "./Album";
import { albums } from "./data";


function App() {

  var i=0;

  return (
    <div>

      <h1 className="title-text">COMP3013 - Week 2 Lab 1</h1>
      {
        <AlbumMain
          name={albums[i].name}
          coverImg={albums[i].coverImg} 
          tracks={albums[i].tracks}
        />
      }

    <h2 className="select-text">Select an Album</h2>
     {albums.map((album) => (
        <AlbumSub
          name={album.name}
          coverImg={album.coverImg} 
        />
      ))}
    </div>  
  );
}

export default App
