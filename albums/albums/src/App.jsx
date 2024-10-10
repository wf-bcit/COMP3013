import "./App.css";
import { AlbumItem } from "./components/AlbumItem";
import { AlbumList } from "./components/AlbumList";
import { albums } from "./database";
import { useState } from "react";
function App() {
  const [albumIndex, setAlbumIndex] = useState(0);
  return (
    <>
      <AlbumItem album={albums[albumIndex]} />
      <AlbumList setAlbumIndex={setAlbumIndex} />
    </>
  );
}

export default App;
