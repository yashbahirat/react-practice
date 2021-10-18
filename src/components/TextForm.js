import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText("You Have Cliked handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase", "success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase", "success")
  }
  const handleClearClick = () => {
    let newText = ''
    setText(newText);
    props.showAlert("Cleared Text", "danger")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container my-4">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control my-4"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-4">
      <h1>Text Summary</h1>
      <p><b>{text.split(/\s+/).filter((item)=>{return item.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
      <p><b>{0.008*text.split(" ").filter((item)=>{return item.length!==0}).length}</b> Minutes To Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>
    </>
  );
}
