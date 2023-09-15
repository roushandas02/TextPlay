import React, {useState, useEffect , useRef} from 'react'
import randomWords from 'random-words'
import { generate, count } from "random-words";
import { Link, useNavigate  } from 'react-router-dom';


const wordCount =140;
const time= 60;



export default function Typespeed() {
    let navigate = useNavigate();

    // All the states are declared-------------------------------------------------------------------------------------------------

    const [words, setWords] = useState([]);
    const [timer, setTimer] = useState(time);
    const [currInp, setCurrInp] = useState("");
    const [currIndex, setCurrIndex] = useState(0);
    const [currChar, setCurrChar] = useState('');
    const [currCharIndex, setCurrCharIndex] = useState(-1);
    const [correct, setCorrect] = useState(0);
    const [highest, setHighest] = useState(0);
    const [character, setCharacter] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [status, setStatus] = useState("waiting");//timer display status
    const [displayStatus, setDisplayStatus] = useState("finished");//result modal display status
    const textInput= useRef(null);
    
    

    // Focuses on the keyboard on pressing start-------------------------------------------------------------------------------------

    useEffect(()=>{
      if(status==="started"){
        textInput.current.focus();
      }
    },[status]);



    // Generates random words from the installed package random-words--------------------------------------------------------------

    useEffect(()=>{
      setWords(generateWords())
  },[]);

    function generateWords(){
      return new Array(wordCount).fill(null).map(()=> generate())
    }


    //When any button of display result modal is pressed-------------------------------------------------------------------------
    function handleInitialize(){
            setWords(generateWords());//new para generated
            setDisplayStatus("finished");//display result modal closed
            setCurrInp("");//textarea cleared
            setCurrIndex(0);
            if(correct>highest)
                setHighest(correct);
            setCorrect(0);
            setCharacter(0);
            setIncorrect(0);
    }

     
    // when start button pressed or any key pressed on typing area-------------------------------------------------------------
    function startTiming(){


      if(status !== "started"){
        setStatus("started");
        let interval = setInterval(() => {
          setTimer((prevTimer) => {
            if(prevTimer===0){
              clearInterval(interval);
              setStatus("finished");
              setCurrInp("");
              // ....
           
              showModal();
            

              return time;
            }
            else{
              return prevTimer-1;
            }
          })
        }, 1000);
      }  
    }
    function showModal(){
        setDisplayStatus("started");// display result modal started
      document.getElementById("demoModal").click();
      if(correct<35){
        document.getElementById("modalTitle").innerHTML="Your Speed is Slow"
      }
      if(correct>=35 && correct<55){
        document.getElementById("modalTitle").innerHTML="Your Speed is Average"
      }
      if(correct>=55 && correct<=75){
        document.getElementById("modalTitle").innerHTML="You are Fast"
      }
      if(correct>=75){
        document.getElementById("modalTitle").innerHTML="Well Done! Keep it Up"
      }
    }



    // if any key is pressed in the textarea-------------------------------------------------------------------------------------
    let a=0;
    function handleKeyDown({keyCode, key}){
      if(a===0 && displayStatus==="finished"){ //Starts timer only if result display modal is closed
        startTiming(); //on first key press
        a++;
      }
      
      if(keyCode===32) //checking spaces
      {
        checkMatch();
        setCurrInp("");
        setCurrIndex(currIndex+1);
        setCurrCharIndex(-1)
      }else{
        setCurrCharIndex(currCharIndex+1);
        setCurrChar(key);
      }

    }
    function checkMatch(){
      const wordToCheck = words[currIndex];
      const match= wordToCheck === currInp.trim();
      if(match){
        setCorrect(correct+1);
        setCharacter(character + wordToCheck.length);
      }
      else{
        setIncorrect(incorrect+1);

      }
    }



    // with every new change in the text area-----------------------------------------------------------------------------------
    function handleOnChange(event){
      setCurrInp(event.target.value)
    }



    //Returning a css class to every character after matching------------------------------------------------------------------
    function getCharClass(wordIdx, charIdx, char){
      
        if(wordIdx===currIndex && charIdx===currCharIndex && currChar && status!=="finished"){
          if(char===currChar){
            return 'bg-success'
          } else {
            return 'bg-danger'
          }
        } 
        else{
          return '';
        }
    }
   





  return(
    <>
    <div className="container">

        <div className='row' id='start'>
            <span className='container text-center'><h1 className='d-inline-block' style={{ fontFamily: 'DM Serif Display' }}>TEXT PLAY -</h1><h5 className='d-inline-block'>TYPESPEED</h5></span>
            <marquee behavior="" direction="">Don't forget to check out other free awesome  tools by TextPlay.</marquee>
            <hr />
            <div className=" col-8 mx-4">
              <h2>Text Preview</h2>
              <div className="container my-3 mx-3 border border-dark rounded">
                  {words.map((word,i) => (
                    <span key={i}>
                    <span>
                      {word.split("").map((char,idx) => (
                        <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                      ))}
                    </span>
                    <span> </span>
                    </span>
                  ))}
              </div>
              <br />
              <h2>Your Text</h2>
              <div className="container">
                  <textarea className="form-control border-dark" ref={textInput} placeholder="Type the above text here" onKeyDown={handleKeyDown} value={currInp} 
                  onChange={handleOnChange} id="floatingTextarea2" rows="10" style={{height: 100}}></textarea>
              
              </div>
              <div className="container d-flex my-5 mx-5">
              <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-success" type="button" onClick={startTiming}> <a className='text-decoration-none text-light' to="#start" >Take The Test</a> </button>
                  <button className="btn btn-primary" type="button"> <Link className='text-decoration-none text-light' to="/"> Move to Homepage</Link></button>
                  {/* <button className="btn btn-warning" type="button"> <Link className='text-decoration-none text-light' to="/textarea"> Move to TextPlay</Link></button> */}
              </div>
              </div>
      
            </div>
            <div className="container col-3 my-3 mx-3">
              <h3 className='mx-2'>Time Remaining</h3>
              <h1 className="text-primary mx-5">{timer} sec</h1>
              <br />
              <br />
              <h5 className='mx-5'>Speed</h5>
              <h4 className="text-info mx-5">{correct} wpm</h4>
              <h4 className="text-info mx-5">{character} cpm</h4>
              <br />
              <h5 className='mx-5'>Errors</h5>
              <h4 className="text-info mx-5">{incorrect} </h4>
              <br />
              <h5 className='mx-5'>Accuraccy</h5>
              <h4 className="text-info mx-5">{Math.round((correct / (correct+incorrect))*100)} %</h4>
              <br />
              <div className="container" style={{ backgroundColor: 'lightgray', borderRadius: '10px', padding: '5px', textAlign: 'center' }}>
                <h3 className='mx-2'>Personal Highest</h3>
                <h4 className="text-primary mx-5">{highest} wpm</h4>
              </div>
              
            </div>
          </div>


          {/* Result Modal-----------------------------------------------------------------------------------------------------       */}

        
          <button type="button" className="btn btn-primary invisible" id='demoModal' data-bs-backdrop="static" data-bs-keyboard="false" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>
          
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Your Performance</h5>
                  <button type="button" onClick={handleInitialize} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <h3 className='text-center' id='modalTitle'></h3>
                  <div className="container row my-3 mx-3">
                    <div className="col-4">
                        <h4>Speed</h4>
                        <h3 className="text-info">{correct} wpm</h3>
                        <h3 className="text-info">{character} cpm</h3>
                        <br />
                    </div>
                    <div className="col-4">
                        <h4>Errors</h4>
                        <h3 className="text-info">{incorrect} </h3>
                        <br />
                    </div>
                    <div className="col-4">
                        <h4>Accuraccy</h4>
                        <h3 className="text-info">{Math.round((correct / (correct+incorrect))*100)} %</h3>    
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" onClick={handleInitialize} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" onClick={handleInitialize} className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                </div>
              </div>
            </div>
          </div>

    </div>
      
    </>
  )
}