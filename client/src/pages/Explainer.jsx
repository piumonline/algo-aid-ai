import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import axios from "axios";
import bigO from '../img/ss.png';
import Dot from '../components/Dot'

function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    console.log("pressed")

    e.preventDefault();

    // Send a request to the server with the prompt
    axios
      .post("http://localhost:8080/explin-code", { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data.data);
        console.log(response)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // console.log(document.getElementById("myTextarea").value)

  

  return (

    <div className='flex bg-black h-screen scrollbar scrollbar-thin pt-3'>
      <div className='ml-4 mr-1'>
      
      <div className='relative'>
      <textarea wrap="off" rows="25" cols="90" value={prompt} onChange={(e) => setPrompt(e.target.value)} 
      className='bg-white border-solid border-10 rounded-3xl border-white p-5 pl-10 m-1'/>
      <button onClick={handleSubmit} className='border-2 border-black text-black absolute bottom-5 right-5  m-1 text-xl font-bold w-12 h-12 rounded-full items-center justify-center pb-1 px-4 bg-white hover:bg-amber-300'>&gt; </button>
      <div className='absolute top-4 left-5  bg-red-200'><Dot /></div>

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

      <div contentEditable="true" className='bg-black border-solid border-2 rounded-3xl border-white p-5 pl-6 pt-6 m-1 text-white overflow-auto ml-4 ml-2 w-120 h-128'>
          {/* <img src={bigO} className='border rounded-3xl mb-6'/> */}
          <p className='text-white '>
            {response}
          </p>
      </div>
      
      </div>
    </div>

// bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500

    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={prompt}
    //       onChange={(e) => setPrompt(e.target.value)}
    //       className='bg-white border-solid border-2 border-sky-500'
    //     />
    //     <button type="submit" className='border-solid border-2 border-sky-500'>Submit</button>
    //   </form>
    //   <p>{response}</p>
    // </div>
  );
}

export default Home