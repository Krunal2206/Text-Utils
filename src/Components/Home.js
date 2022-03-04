import React, { useState } from 'react';

export default function Home(props) {

    const [text, setText] = useState("");

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
    }

    const handleCopyText = () => {
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <div className="container my-4">
            <div className="mb-3">
                <label htmlFor="myText" className="form-label"><h3><strong>TextUtils - {props.text}</strong></h3></label>
                <textarea className="form-control" id="myText" value={text} onChange={(e) => { setText(e.target.value) }} rows="5" placeholder="Please Enter Text"></textarea>
            </div>
            <button type="button" className="btn btn-danger mx-1 my-1" onClick={handleUpperCase}>Convert to Upper Case</button>
            <button type="button" className="btn btn-danger mx-1 my-1" onClick={handleLowerCase}>Convert to Lower Case</button>
            <button type="button" className="btn btn-danger mx-1 my-1" onClick={handleClearText}>Clear Text</button>
            <button type="button" className="btn btn-danger mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button type="button" className="btn btn-danger mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>

            <div className="count mt-4">
                <h4 className='mb-3'><strong>Word Counter</strong></h4>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words {text.length} Character</p>
                <p>{0.008 * (text.split(/\s+/).filter((element) => { return element.length !== 0 }).length).toPrecision(3)} Read Time</p>
            </div>

            <div className="preview mt-4">
                <h3 className='mb-3'><strong>Preview</strong></h3>
                <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
            </div>
        </div>
    )
}