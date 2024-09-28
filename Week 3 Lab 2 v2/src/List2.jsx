import { useState } from 'react';

let nextId = 0;

export function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  const nameEntry = (e) => {setName(e.target.value)};
  const nameAdd = () => {setArtists( [ ...artists, { id: nextId++, name: name } ] ) };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={nameEntry} />
      <button onClick={nameAdd}>Add</button>
      <ul>
        {artists.map(artist => (<li key={artist.id}>{artist.name}</li>))}
      </ul>
    </>
  );
}
