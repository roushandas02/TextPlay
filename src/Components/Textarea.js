import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';




export default function Textarea(props) {
    

    // STATE VARIABLES DECLARED-------------------------------------------------------------------------------------------------------------
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');


    const changeDetect = (event)=> {
        setText(event.target.value)
        setText2(event.target.value)
    }


    // CONVERSION TO UPPER AND LOWER CASE---------------------------------------------------------------------------------------------------
    const convertUpper = (event)=> {
        let newText=text.toUpperCase();
        setText(newText);
        console.log("hehe");
        // document.getElementById("floatingTextarea3").value={text};
    }
    const convertLower = (event)=> {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearArea = (event)=> {
        setText('')
        setText2('')
    }




    let spaces=0;
    let c=0;
    let w=0;
    if(text.length>0 && text.charAt(0)!=' ')
    w++; 
    for(let i=0;i<text.length-1;i++)
    {
        if(text.charAt(i)==" ")
        {
            c++;
            if(text.charAt(i+1)!=" ")
            w++;
        }
        
    }


    // COPYING THE GENERATED TEXT--------------------------------------------------------------------------------------------------------
    const copyText = (event)=> {
        var copyText = document.getElementById("floatingTextarea3");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        alert("Copied the text: " + copyText.value);
    }





    
  return (
    <div className='container'>
        <div className='row' id='start'>
       <span className='container text-center'><h1 className='d-inline-block' style={{ fontFamily: 'DM Serif Display' }}>TEXT PLAY -</h1><h5 className='d-inline-block'>TEXTAREA</h5></span>
       <marquee behavior="" direction="">Don't forget to check out other free awesome  tools by TextPlay.</marquee>
        <hr />
        <div className="row">
      <div className="form-floating container my-5 col-8">
        <textarea className="form-control border-dark" placeholder="Leave a comment here" onChange={changeDetect} value={text2} id="floatingTextarea2" rows="10" style={{height: 200}}></textarea>
        <label htmlFor="floatingTextarea2">ENTER YOUR TEXT HERE</label>
        <button className="btn btn-primary my-4 mx-3" onClick={convertUpper}>Convert to Upper Case</button>
        <button className="btn btn-primary my-4 mx-3" onClick={convertLower}>Convert to Lower Case</button>
        <button className="btn btn-success my-4 mx-3" onClick={clearArea}>Clear</button>
        <textarea className="form-control border-dark" placeholder="Leave a comment here" id="floatingTextarea3" value={text} rows="10" style={{height: 200}}></textarea>
        <label htmlFor="floatingTextarea3"></label>
      </div>
      <div className="container col-2 my-5">
          <h1>Your Text Summary</h1>
          <p>{text.length} characters</p>
          <p>{w} words</p>
          <p>{c} spaces</p>
          <p>{0.008 * w} minutes read</p>
          <button type='button' className="btn btn-success mx-auto" onClick={copyText} id="clipboard" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Copy to Clipboard">Copy the generated text</button>
          <div className="container mx-5 my-5">
          <div className="d-grid gap-2 container">
              <button className="btn btn-info btn-lg" type="button"> <Link className='text-decoration-none text-light' to="/typespeed"> TypeSpeed <span class="badge bg-success rounded-pill">New</span></Link></button>
              <button className="btn btn-info btn-lg" type="button"> <Link className='text-decoration-none text-light' to="/">Homepage</Link></button>
          </div>
          </div>
      </div>
      </div>
      </div>
    </div>
  )
}
