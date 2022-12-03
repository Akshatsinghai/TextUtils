import React, {useState} from "react";

function TextForm(props)
{
    const [text,setText] = useState("");
   
   


    const handleUpClick = ()=>{
      let newText= text.toUpperCase();
    setText(newText);
    }

    const handleLoClick = ()=>{
      let newText= text.toLowerCase();
      setText(newText);
      }
      const handleClrClick = ()=>{
        let newText= " ";
        setText(newText);
        }

const handleOnChange = (event)=>{
     setText(event.target.value);
}
    return(
      <>
       <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className ="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
</div>
<button className= "btn btn-primary mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
<button className= "btn btn-primary mx-2" onClick={handleLoClick}>Covert to Lowercase</button>
<button className= "btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
       </div>
       <div className="container my-3">
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>
       </>
    )
}

export default TextForm;