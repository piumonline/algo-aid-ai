import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import axios from "axios";
import bigO from '../img/ss.png';
import Dot from '../components/Dot'


function Complexity() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    // Send a request to the server with the prompt
    axios
      .post("http://localhost:8080/find-complexity", { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data.data);
        // console.log(response)
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const regex = /O\((1|logN|NlogN|2\^n|n\^2|log n|n(\slog n)?|kn|n!)\)/g; 

  let match = response.match(regex);
  // console.log(match); 

  // console.log(document.getElementById("myTextarea").value)

  return (

    <div className='flex bg-black h-screen scrollbar scrollbar-thin pt-3'>
      <div className='ml-4 mr-1'>
      
      <div className='relative'>
      <textarea wrap="off" rows="13" cols="102" placeholder='Type/Paste your code here...' value={prompt} onChange={(e) => setPrompt(e.target.value)} 
      className='bg-white border-solid border-10 rounded-3xl border-white p-5 pl-10 m-1 pt-14'/>
      <div className='absolute top-4 left-5  bg-red-200'><Dot /></div>
      <button onClick={handleSubmit} className='border-2 border-black text-black absolute bottom-5 right-5  m-1 text-xl  font-bold w-12 h-12 rounded-full items-center pb-1 px-4 bg-white hover:bg-amber-300'>&gt; </button>
      </div>
      
      <div>
        {/* <textarea id="w3" rows="4" cols="10" value={response}
        className='bg-amber-300 border-solid rounded-3xl border-amber-300 border-2 p-5 m-1 text-black text-7xl items-center justify-center'/> */}
<div className='flex'>
        <div className='bg-amber-300 border-solid rounded-3xl border-amber-300 border-2 p-5 m-1 mr-2 h-72 w-80 flex items-center justify-center '>
        <p className=' text-black text-7xl ' placeholder='big O'>
        {match}
        </p>
        </div>
        
        <textarea id="w3" rows="8" cols="47" value={response} placeholder='wzesxrdctfvgybhunjimok,qazwsexdcrftvgybhunjimkowazsexdrcftvgybhunjimk'
        className='bg-emerald-400 border-solid rounded-3xl text-justify border-emerald-400 border-2 p-5 m-1 text-xl'/>
      </div>
      </div>
      
      </div>

      <div>
      {/* <textarea rows="27" cols="65"
      className='bg-black border-solid border-2 rounded-3xl border-white p-5 m-1 text-white'>
          <img src={bigO}/>
      </textarea> */}

      <div contentEditable="true" className='bg-black border-solid border-2 rounded-3xl border-white p-5 pl-6 pt-6 m-1 text-white overflow-auto h-128 mr-6 ml-2 scrollbar scrollbar-thin'>
          <img src={bigO} className='border rounded-3xl mb-6'/>
          <p className='text-white '>
          Big O notation is a mathematical tool used to analyze the time complexity of algorithms. It provides a way to describe the upper bound of the time required for an algorithm to solve a problem as a function of the input size. In this article, we will discuss what big O notation is, how it works, and its importance in computer science.

          <br/><br/>What is Big O Notation? <br/><br/>


Big O notation is a mathematical notation used to describe the limiting behavior of a function when the argument approaches infinity. In computer science, it is used to describe the time complexity of an algorithm. The notation is expressed as O(f(n)), where f(n) is a function that represents the upper bound of the time complexity of an algorithm as a function of the input size n.

The "O" in big O stands for "order of", and it is used to describe the order of magnitude of the algorithm's time complexity. For example, an algorithm with a time complexity of O(n) means that the algorithm's running time increases linearly with the input size n. An algorithm with a time complexity of O(n^2) means that the algorithm's running time increases quadratically with the input size n.

          <br/><br/>How Big O Notation Works<br/><br/>

Big O notation provides a way to measure the efficiency of an algorithm by analyzing its time complexity. Time complexity is the measure of the amount of time an algorithm takes to run as a function of the input size. The input size could be the number of elements in an array, the length of a string, or the number of nodes in a tree.

To calculate the time complexity of an algorithm, we count the number of operations the algorithm performs for a given input size n. Then, we express the time complexity in terms of a function of n. The function should represent the upper bound of the time required for the algorithm to solve a problem as a function of the input size.

For example, consider the following algorithm that finds the maximum element in an array of size n:

          <br/><br/>Importance of Big O Notation<br/><br/>

Big O notation is important in computer science because it helps us compare the efficiency of different algorithms for solving the same problem. We can use big O notation to determine which algorithm is the most efficient for a given problem, and to identify algorithms that are inefficient for large input sizes.

Big O notation also helps us to optimize algorithms by identifying the parts of an algorithm that are most time-consuming. We can use this information to improve the efficiency of an algorithm by optimizing the time-consuming parts.

          <br/><br/>Conclusion<br/><br/>

In conclusion, big O notation is a mathematical tool used to analyze the time complexity of algorithms. It provides a way to describe the upper bound of the time required for an algorithm to solve a problem as a function of the input size. Big O notation is important in computer science because it helps us compare the efficiency of different algorithms for solving the same problem, and to identify algorithms that are inefficient for large input sizes.


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

export default Complexity