import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppeercase","Success")
  };
  const handleToClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","Success")
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","Success")
  };
  const handleRemoveSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra paces","Success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Removed Text","Success")
  };
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showAlert("Text was Converted to Capitalize","Success")
  };
  const replaceString = () => {
    let repval=prompt("Enter the word to be replaced:")
    let tobereplaced= new RegExp(repval,'g');

    let toreplace=prompt("Enter the text that you want to replace with:");
    
    let newText= text.replace(tobereplaced,toreplace);
    setText(newText);
    props.showAlert("Text was Replaced","Success")
  };
  const handleReverse = () => {
    let newText = text.split(" ").reverse().join(' ');
    setText(newText);
    props.showAlert("Text was removed extra Spaces","Success")
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    // msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text was Spoken","Success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
    {/* <Navbar/> */}
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3> <b> Try TextUtils - word counter, character counter, remove extra spaces, speak, convert to uppercase, convert to lower case. </b> </h3>
        {/* <h3> <b> {props.heading} </b> </h3> */}
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}} cols="200" rows="7" id="message" name="message">
        </textarea>        
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to Uppercase </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleToClick}> Convert to Lowercase </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}> Copy Text </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaceClick}> Remove Extra Space </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}> Convert to Capitalize </button>
        <button className="btn btn-primary mx-1 my-1" onClick={replaceString}> Replace Words </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverse}> Replace to Reverse </button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak}> Speak </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary </h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters{" "}</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview!'} </p>
      </div>
    </>
  );
}
