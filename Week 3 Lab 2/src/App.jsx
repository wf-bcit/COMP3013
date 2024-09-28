import { AlbumMain, AlbumSub } from "./Album";
import { albums } from "./data";
//import { MyInput } from "./MyInput";
import { useState } from "react";

export function MyInput()
{
    const [text, setText] = useState(" ");
    const handleChange = (e) => {
        setText(e.target.value);

    };
    return(
    <div>
        <p>You typed: {text}</p>
        <input onChange={handleChange} type="text" />
    </div>
    );
}

export function Boom()
{
    const [text, setText] = useState(" ");
    const handleChange = (e) => {
        setText(e.target.value);

    };
    return(
    <div>
        <p>You typed: {text}</p>
        <input onChange={handleChange} type="text" />
    </div>
    );
}

function SubmitClick()
{
const albumName_ = document.getElementById("albumName_");
const coverURL_ = document.getElementById("coverURL_");
let albumCount = albums.length;
let newAlbum = { id: albumCount, name: albumName_.value, coverImg: coverURL_.value,  tracks: ["Track1", "Track2", "Track3", "Track4"]};
albums.push(newAlbum);
console.log("Hello " + albumName_.value + " " + coverURL_.value);
console.log("album number " + albumCount);
console.log(albums);
albumName_.value = "";
coverURL_.value = "";
}


function CountApp()
{
	let [count, setCount] = useState(1);
	const increment = () => {setCount(count+1)};
	const decrement = () => {setCount(count-1)};

	return(
	<div>
		<button onClick={increment}>+</button>
		<h1>The count is: {count}</h1>
		<button onClick={decrement}>-</button>
	</div>	
	);

}


function ZoopApp()
{
	let [count, setCount] = useState(1);
	const increment = () => {setCount(count+1)};
	const decrement = () => {setCount(count-1)};

  let [blam, setBlam] = useState(albums);

  const Boom = () => {
    const albumName_ = document.getElementById("zoopName");
    const coverURL_ = document.getElementById("zoopURL");
    let albumCount = albums.length;
    let newAlbum = { id: albumCount, name: albumName_.value, coverImg: coverURL_.value,  tracks: ["Track1", "Track2", "Track3", "Track4"]};
    albums.push(newAlbum);
    console.log(albums);
    setBlam(albums);
  }

	return(
	<div>
    <h1>Zoop Begin</h1>
    <input type="text" name="zoopName" id="zoopName" />
    <input type="text" name="zoopURL" id="zoopURL" />
		<button onClick={increment}>+</button>
		<h1>The count is: {count}</h1>
		<button onClick={decrement}>-</button>
    <button onClick={Boom}>ZOOP</button>
    {blam.map((album) => (
        <AlbumSub
          name={album.name}
          coverImg={album.coverImg} 
        />
      ))}
    <h1>Zoop ENDS</h1>
	</div>	
	);

}


// function Zoopy()
// {
// 	let [zoop, setZoop] = useState(albums);
// 	const increment = () => {setCount(count+1)};


// 	return(
// 	<div>
//     <h1>Zoop Begin</h1>
//     <input type="text" name="zoopName" id="zoopName" />
//     <input type="text" name="zoopURL" id="zoopURL" />
// 		<button onClick={increment}>+</button>
// 		<h1>The count is: {count}</h1>
// 		<button onClick={decrement}>-</button>
//     <h1>Zoop ENDS</h1>
// 	</div>	
// 	);

// }


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

    <MyInput />
    <CountApp />
    <ZoopApp />
    {/* <Zoopy /> */}
    {/* <input type="text"  placeholder="aDD"/>
    <input type="text"  value={coverURL} /> */}

    <input type="text" name="albumName_" id="albumName_" />
    <input type="text" name="coverURL_" id="coverURL_" />
    <button type="submit" value="Submit" onClick={SubmitClick}>Add</button>
    <button type="submit" value="Submit2" onClick={Boom}>Add2</button>

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
