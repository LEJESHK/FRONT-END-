import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Nav = ({search,setSearch}) => {

  return (
    <nav className='Nav'>
<form className='searchform' onSubmit={(e)=>{e.preventDefault()}}>
<input id="search"
type="text"
placeholder='search post'
value={search}
onChange={()=>{setSearch((e)=>e.target.value)}}

/>
</form>
    <ul className='lee'>
<li><Link className="nav" to='/'>Home</Link></li>
<li><Link className="nav" to='/post'>Post</Link></li>
<li><Link className="nav" to='/about'>About</Link></li>

    </ul>
    </nav>
  )
}

export default Nav;