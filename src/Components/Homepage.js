import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Homepage() {
    function cookies(){
        document.getElementById('cookiesModal').click();
    }
    setTimeout(function(){
        cookies();
    },5000)
    
  return (
    <>

      <div className="">
      


        {/* <button type="button" class="btn btn-primary position-fixed">
          Chat with us
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1
            <span class="visually-hidden">unread messages</span>
          </span>
        </button> */}

        <div className="container">
            <h1  style={{ fontFamily: 'DM Serif Display', textAlign: 'center' }}>TEXT PLAY </h1>
            <marquee behavior="" direction="">Try out the new Typing test tool by TextPlay.</marquee>
            <hr />
            <p>TextPlay is your all-in-one platform for text manipulation and exploration. Whether you're a professional writer, a student, or anyone who interacts with text regularly, TextPlay offers a comprehensive toolkit designed to simplify and enhance your text-related tasks. </p>
            <p>From testing your typing speed to counting words in a paragraph, generating text summaries, and performing various text modifications, TextPlay empowers you to engage with text in creative and productive ways. With a wide range of tools and features at your disposal, you can seamlessly navigate the world of text, making it an essential companion for all your text-related needs.</p>
            <p>Dive into the realm of text modifications, where you can effortlessly switch between uppercase and lowercase, adjust whitespace, and perform various other transformations. With TextPlay by your side, text becomes a playground where you can experiment, learn, and accomplish your objectives with ease, making it an indispensable companion for all your text adventures.</p>
            <br /><br />
        </div>

        <div className="container">
            <span className='text-center'><h1 className='d-inline-block' style={{ fontFamily: 'DM Serif Display' }}>TEXT PLAY -</h1><h3 className='d-inline-block' style={{ fontFamily: 'DM Serif Display' }}>Our Tools</h3></span>
            <hr />
            <br />
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button"><Link className='text-decoration-none text-light' to="/textarea">TextArea</Link></button>
                <button className="btn btn-primary" type="button"><Link className='text-decoration-none text-light' to="/typespeed">TypeSpeed<span class="badge bg-success rounded-pill">New</span> </Link></button>
            </div>
            <br />
        </div>
        

        
        <div className='container'>
            
        </div>



        <div className="container">
            <br />
            <br />
            <span className='text-center' id='abouts'><h1 className='' style={{ fontFamily: 'DM Serif Display' }}>Tools at a Glance </h1></span>
            <hr />
            <br />
            <h4>TextArea Tool</h4>
            <p>If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.</p>
            <br />
            <p>The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
            To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.</p>
            <br />
            <h4>TypeSpeed Tool</h4>
            <p>We prepared this free typing test to give you a quick and easy way to test your typing speed. You can use it when practicing your typing skills to get an idea of how well you are progressing. Businesses can use this test to get an idea about the typing skills of potential hires or to help existing employees develop their typing speed. This typing speed test is one of our free tools, just like the UTM Builder or our Privacy Policy Generator.</p>
            <br />
            <p>The average person types between 38 and 40 words per minute (WPM). That translates into between 190 and 200 characters per minute (CPM). However, professional typists type a lot faster, averaging between 65 and 75 WPM.An average professional typist usually types around 65 to 75 WPM. More advanced positions require 80 to 95 (this is typically the minimum required for dispatch positions and other time-sensitive typing jobs). There are also some advanced typists whose work requires speeds above 120 WPM.</p>
            <br />
            <h6>Happy Typing! and don't forget to review us</h6>
        </div>

        

        {/* Cookies Modal--------------------------------------------------------------------------------------------------*/}

                <button type="button" class="btn btn-primary invisible" id="cookiesModal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
                </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Cookies Policy</h5>
                        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div class="modal-body">
                        This site uses cookies from the user to enhance the user experience and show interest related articles.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cookies Settings</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Accept Cookies</button>
                    </div>
                    </div>
                </div>
                </div>


        </div>
    </>
    
  )
}
