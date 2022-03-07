import React, { useState } from 'react'

export default function TextForm(props) {
    //Uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked", text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")

    }
    //Lowercase
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    //EmailExtract
    const handleEmailExtract = () => {
        let regex = /\S+[a-z0-9]@[a-z0-9.]+/img
        let newText = text.match(regex)
        if (newText == null) {
            setText("No email Found")
            props.showAlert("No Email Found", "danger")
        }
        else {
            setText(newText[0])
            props.showAlert("Email Extracted", "success")
        }
    }
    //ClearText
    const handleClearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared", "success")
    }
    //You will notice that you cannot add more text in the textbox. This is due to the reason as we didn’t assign a function to the ‘Onchange’ event.
    const handleOnChange = (event) => {
        // console.log("OnChange was clicked")
        setText(event.target.value)
    }

    const [text, setText] = useState("")

    return (
        <>
            <div className='container' style={{ color: props.mode === "dark" ? "white" : "#003282" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* Here, The value of our text is ‘Enter text here2’. Let's pass this value in our textbox and make sure to use the ‘Onchange’ event to enable text entry in your textbox. To do so change the code of your text area to: */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#003282" }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary ms-3" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary ms-3" onClick={handleEmailExtract}>Extract First Email</button>
                <button className="btn btn-primary ms-3" onClick={handleClearText}>Clear Text</button>


            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#003282" }}>
                <h1>Your Text Summary</h1>
                <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.trim().length} characters</p>
                <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>
        </>

    )
}



