import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Pagelayout = () => {
  return (
    <div><Link to='/postpage/1'>post1</Link>
    <br/>
    <Link to='/postpage/2'>post2</Link>
    <br></br>
    <Link to='/postpage/3'>post3</Link>
    <br></br>
    <Link to='/postpage/newpost'>newpost</Link>
    
<Outlet/></div>

 )
}

export default Pagelayout