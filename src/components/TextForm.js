import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const toUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
    }
    const toLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success');
    }
    const clearText = () => {
        setText('');
        props.showAlert('Cleared the text','success');
    }
    const copytext = () => {
        window.navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard','success');
    }
    const removeExtraSpaces = () => {
        let newText = text.replace(/\s{2,}/g, ' ').trim();
        setText(newText);
        props.showAlert('Extra spaces removed','success');
    }
    const capitalizeFirst = () => {
        let words = text.toLowerCase().split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
        }
        setText(words.join(' '));
        props.showAlert('Capitalized first letter','success');
    }
    const changeEvent = (event) => {
        setText(event.target.value);
    }
    const calcWords=(text)=>{
        let x=text.split(' ');
        let count=0;
        for(let word of x){
            if(word.length>0) count++;
        }
        return count;
    }
    const [text, setText] = useState('');
    return (
        <>
            <div>
                <h1 className='my-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{
                        backgroundColor:props.mode==='light'?'white':'#343434',
                        color:props.mode==='light'?'black':'white'
                    }} value={text} onChange={changeEvent} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary my-3 mx-1" onClick={toUpper}>Convert to uppercase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={toLower}>Convert to lowercase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={clearText}>Clear text</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={copytext}>Copy text</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={removeExtraSpaces}>Remove extra spaces</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={capitalizeFirst}>Capitalize First</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your Text summary</h2>
                <p>Total words: {calcWords(text)}</p>
                <p>Total characters: {text.length}</p>
                <p>Time to read: {0.008 * text.split(' ').length} mins</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Type something to preview'}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
};