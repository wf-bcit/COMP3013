export function Album({ album, setAlbumIndex }) {
  return (
    <div onClick={() => setAlbumIndex(album.id)} className="album">
      <img className="album-cover" src={album.coverImg} alt={album.name} />
      <p className="album-name">{album.name}</p>
    </div>
  );
}
