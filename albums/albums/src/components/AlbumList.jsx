import { albums } from "../database";
import { Album } from "./Album";

export function AlbumList({ setAlbumIndex }) {
  return (
    <div className="album-list">
      <h3 className="select-album">Select an Album</h3>
      {albums.map((album) => (
        <Album setAlbumIndex={setAlbumIndex} album={album} key={album.id} />
      ))}
    </div>
  );
}
