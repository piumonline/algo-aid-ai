import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import axios from "axios";
import bigO from '../img/ss.png';

function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    console.log("pressed")

    e.preventDefault();

    // Send a request to the server with the prompt
    axios
      .post("http://localhost:8080/find-complexity", { prompt })
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

    <div className='flex bg-black h-screen'>
      <div className='ml-4 mr-1'>
      
      <div className='relative'>
      <textarea wrap="off" rows="13" cols="110" value={prompt} onChange={(e) => setPrompt(e.target.value)} 
      className='bg-white border-solid border-10  rounded-3xl border-white p-5 m-1'/>
      <button onClick={handleSubmit} className=' border-2 border-black text-black absolute bottom-5 right-5 rounded-full m-1 text-xl'> &gt; </button>
      
      </div>
      
      <div>
        {/* <textarea id="w3" rows="4" cols="10" value={response}
        className='bg-amber-300 border-solid rounded-3xl border-amber-300 border-2 p-5 m-1 text-black text-7xl items-center justify-center'/> */}
<div className='flex'>
        <div className='bg-amber-300 border-solid rounded-3xl border-amber-300 border-2 p-5 m-1 mr-2 h-72 w-80 flex items-center justify-center '>
        <p className=' text-black text-7xl '>
        {response[1]}{response[2]}{response[3]}{response[4]}{response[5]}{response[6]}
        </p>
        </div>
        
        <textarea id="w3" rows="10" cols="64" value={response}
        className='bg-emerald-400 border-solid rounded-3xl border-emerald-400 border-2 p-5 m-1'/>
      </div>
      </div>
      
      </div>

      <div>
      {/* <textarea rows="27" cols="65"
      className='bg-black border-solid border-2 rounded-3xl border-white p-5 m-1 text-white'>
          <img src={bigO}/>
      </textarea> */}

      <div contentEditable="true" className='bg-black border-solid border-2 rounded-3xl border-white p-5 m-1 text-white overflow-auto h-128'>
          <img src={bigO} className='border rounded-3xl'/>
          <p className='text-white '>sdcsdcscvosijdv
          Do you really understand Big O? If so, then this will refresh your understanding before an interview. If not, don’t worry — come and join us for some endeavors in computer science.

If you have taken some algorithm related courses, you’ve probably heard of the term Big O notation. If you haven’t, we will go over it here, and then get a deeper understanding of what it really is.

Big O notation is one of the most fundamental tools for computer scientists to analyze the cost of an algorithm. It is a good practice for software engineers to understand in-depth as well.

This article is written with the assumption that you have already tackled some code. Also, some in-depth material also requires high-school math fundamentals, and therefore can be a bit less comfortable to total beginners. But if you are ready, let’s get started!

In this article, we will have an in-depth discussion about Big O notation. We will start with an example algorithm to open up our understanding. Then, we will go into the mathematics a little bit to have a formal understanding. After that we will go over some common variations of Big O notation. In the end, we will discuss some of the limitations of Big O in a practical scenario. A table of contents can be found below.</p>
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