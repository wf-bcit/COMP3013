import { useState } from "react";

export function MyInput({tempText})
{
    const [text, setText] = useState(" ");
    const handleChange = (e) => {
        setText(e.target.value);

    };
    return(
    <div>
        <p>You typed: {text}</p>
        <input onChange={handleChange} type="text" placeholder={tempText} />
    </div>
    );
}


export function MyButton({tempText})
{
const [text, setText] = useState(" ");
const handleChange = (e) => {
    setText(e.target.value);

};
return(
<div>
    <p>You typed: {text}</p>
    <input onClick={handleChange} type="button" placeholder={tempText} />
</div>
);
}