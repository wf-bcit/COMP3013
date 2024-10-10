export function AlbumItem({ album }) {
  return (
    <div className="album-detail">
      <img src={album.coverImg} alt="Cover Image" />
      <ol>
        {album.tracks.map((track) => (
          <li key={track}>{track}</li>
        ))}
      </ol>
    </div>
  );
}
