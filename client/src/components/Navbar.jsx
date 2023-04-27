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
    <div className='bg-slate-300 h-14 flex justify-between items-center px-16'>
        <img src={Logo} alt='logo' className='w-20 items-center'/>
        <div className='justify-center'>
        <ul className='flex  pl-10 text-sm text-gray-600 border-b-red-600'>
            <Link to='/'><li className={`py-3 px-3  ${pathMathRouter("/") && "text-black border-b-4 border-b-red-600"}`}>Analyze</li></Link>
            <Link to='/about'><li className={`py-3 px-3  ${pathMathRouter("/about") && ""}`}>About</li></Link>
            <Link to='/learn'><li className={`py-3 px-3  ${pathMathRouter("/learn") && "text-black border-b-4 border-b-red-600"}`}>Learn</li></Link>
            <Link to='/duck'><li className={`py-3 px-3  ${pathMathRouter("/duck") && "text-black border-b-4 border-b-red-600"}`}>Duck</li></Link>
        </ul>
        </div>
        
    </div>
  )
}

export default Navbar