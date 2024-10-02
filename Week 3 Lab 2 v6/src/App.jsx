import { AlbumMain, AlbumList } from "./Album";
import { albums } from "./data";


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
    <AlbumList albums={albums} />

    </div>  
  );
}


export default App
