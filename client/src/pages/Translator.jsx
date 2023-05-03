import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import axios from "axios";
import bigO from '../img/ss.png';
import Dot from '../components/Dot'

function Translator() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [translatedValue, setTranslatedValue] = useState("");

  const handleSelectChange1 = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelectChange2 = (event) => {
    setTranslatedValue(event.target.value);
  };

  console.log(selectedValue)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a request to the server with the prompt
    axios
      .post("http://localhost:8080/translator", { prompt:prompt, selectedValue:selectedValue, translatedValue:translatedValue})
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data.data);
        // console.log(response)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (

    <div className='flex bg-black h-screen scrollbar scrollbar-thin pt-3'>
      <div className='ml-4 mr-1'>
      
      <div className='relative'>
      <textarea wrap="off" rows="25" cols="85" value={prompt} onChange={(e) => setPrompt(e.target.value)} 
      className='border-solid rounded-3xl border-2 border-white p-6 pl-10 m-1 text-white backdrop-saturate-125 bg-white/30'/>
      {/* dropdown */}
      <div className=' absolute top-2 left-80 mt-2'>
        <select value={selectedValue} onChange={handleSelectChange1} className="bg-transparent" >
          <option value="">Select Language</option>
          <option value="C#">C#</option>
          <option value="Java">Java</option>
          <option value="Java Script">Java Script</option>
        </select>
      </div>
      
      <div className='absolute top-4 left-5  bg-red-200'><Dot /></div>
      <button onClick={handleSubmit} className='border-2 border-black text-black absolute bottom-5 right-5  m-1 text-xl font-bold w-12 h-12 rounded-full items-center justify-center pb-1 px-4 bg-white hover:bg-amber-300'>&gt; </button>

      </div>
      
      <div>
        {/* <textarea id="w3" rows="4" cols="10" value={response}
        className='bg-amber-300 border-solid rounded-3xl border-amber-300 border-2 p-5 m-1 text-black text-7xl items-center justify-center'/> */}      

      </div>
      
      </div>

      <div>
      {/* <textarea rows="27" cols="65"
      className='bg-black border-solid border-2 rounded-3xl border-white p-5 m-1 text-white'>
          <img src={bigO}/>
      </textarea> */}

      <div contentEditable="false" className='backdrop-saturate-125 bg-regal-blue/40 border-solid border-2 rounded-3xl border-white px-5 pl-6 m-1 text-white overflow-auto ml-4 ml-2 w-130 h-128  '>
          {/* <img src={bigO} className='border rounded-3xl mb-6'/> */}
          <div className='absolute top-24 bg-red-200'><Dot /></div>
          
          {/* dropdown */}
          <div className=' justify-center flex relative mt-2'>
            <select value={translatedValue} onChange={handleSelectChange2} className="bg-transparent" >
              <option value="">Select Language</option>
              <option value="C#">C#</option>
              <option value="Java">Java</option>
              <option value="Java Script">Java Script</option>
            </select>
          </div>

          <p className='text-white '>
            {response}
          </p>
      </div>
      
      </div>
    </div>

// bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500
  );
}

export default Translator