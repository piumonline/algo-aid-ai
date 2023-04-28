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
    <div className='bg-black h-14 flex justify-between items-center px-16'>
        <img src={Logo} alt='logo' className='w-20 items-center'/>
        <div className='justify-center'>
        <ul className='flex  pl-10 text-sm text-white border-b-red-600'>
            <Link to='/'><li className={`py-3 px-8 mx-2 text-white border border-white rounded-full  ${pathMathRouter("/") && "bg-amber-300 text-black border-black"}`}>Analyze</li></Link>
            <Link to='/about'><li className={`py-3 px-8 mx-2 text-white border border-white rounded-full  ${pathMathRouter("/about") && ""}`}>About</li></Link>
            <Link to='/learn'><li className={`py-3 px-8 mx-2 text-white border border-white rounded-full  ${pathMathRouter("/learn") && "text-white border-b-4 border-b-red-600"}`}>Learn</li></Link>
            <Link to='/duck'><li className={`py-3 px-8 mx-2 text-white border border-white rounded-full  ${pathMathRouter("/duck") && "text-white border-b-4 border-b-red-600"}`}>Duck</li></Link>
        </ul>
        </div>
        
    </div>
  )
}

export default Navbar