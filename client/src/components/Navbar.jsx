import React from 'react'
import Logo from '../img/logo.png'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

    const location = useLocation();
  
    function pathMathRouter(route){
        if(route===location.pathname){
          return true
        }
        // route === location.pathname ? true:null
      }
    

  return (
    <div className='bg-black pt-3'>
    <div className='bg-black h-14 flex justify-between items-center px-16 border border-solid border-2 border-white rounded-full mx-5'>
        {/* <img src={Logo} alt='logo' className='w-20 items-center'/> */}
        {/* <Link to='/'><p className={`py-2 px-8 text-white  border-bg-amber-300 rounded-full font-semibold  ${pathMathRouter("/") && "bg-emerald-400 border-amber-300 font-semibold"}`}>AlgoAid.Ai</p></Link> */}
        <Link to='/'><p className={`bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-8 text-white  border-bg-amber-300 rounded-full font-semibold  bg-emerald-400 border-amber-300 `}>AlgoAid.Ai</p></Link>

        <div className='justify-center'>
        <ul className='flex  pl-10 text-sm text-white border-b-red-600'>

            <Link to='/complexity'><li className={` py-2 px-8 mx-2 text-white border border-bg-amber-300 rounded-full font-semibold  ${pathMathRouter("/complexity") && "bg-amber-300 border-amber-300 font-semibold"}`}>Analyze</li></Link>
            <Link to='/explainer'><li className={`py-2 px-8 mx-2 text-white border border-bg-amber-300 rounded-full font-semibold ${pathMathRouter("/explainer") && "bg-amber-300 text-black border-black font-semibold"}`}>Explainer</li></Link>
            <Link to='/translator'><li className={`py-2 px-8 mx-2 text-white border border-white rounded-full font-semibold  ${pathMathRouter("/translator") && "bg-amber-300 text-black border-black font-semibold"}`}>Translate</li></Link>
            {/* <Link to='/learn'><li className={`py-2 px-8 mx-2 text-white border border-white rounded-full font-semibold ${pathMathRouter("/Donno") && "bg-amber-300 text-black border-black font-semibold"}`}>Write</li></Link> */}
            <Link to='/learn'><li className={`py-2 px-8 mx-2 text-white border border-white rounded-full font-semibold ${pathMathRouter("/Donno") && "bg-amber-300 text-black border-black font-semibold"}`}>Bug Fixer</li></Link>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar