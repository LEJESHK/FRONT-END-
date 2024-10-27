import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Post from './Post';
import About from './About';
import Missing from './Missing';
import Footer from './Footer'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Pagelayout from './Pagelayout';
import { useEffect, useState } from 'react';

function App() {
  const navigate=useNavigate();
  
  const [posts,setPosts]=useState([
{
  id:1,title:"first",datetime:"July 01,2021 11:17:36 AM",body:"this is the first content"

},
{
  id:2,title:"second",datetime:"July 01,2021 11:17:36 AM",body:"this is the second content"

},
{
  id:3,title:"third",datetime:"July 01,2021 11:17:36 AM",body:"this is the third content"

},
{
  id:4,title:"fourth",datetime:"July 01,2021 11:17:36 AM",body:"this is the fourth content"

}
  ])
  const [search,setSearch]=useState('');
  const [searchresults,setSearchresults]=useState([]);
  const [postTitle,setPostTitle]=useState('');
  const [postBody,setPostBody]=useState('');
 
  const handleSubmit=(e)=>{
e.preventDefault();
const id=posts.length?posts[posts.length-1].id+1:1;
const datetime='July 01,2021 11:17:36 AM';
const newPost={id,title:postTitle,datetime,body:postBody}
const allPosts=[...posts,newPost];
setPosts(allPosts);
setPostBody('');
setPostTitle('');
navigate("/");
  }
   useEffect(()=>{
const fileter=posts.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase()))
setSearchresults(fileter.reverse());
  },[posts,search])
  const handleDelete=(id)=>{
    const array=posts.filter(post=> post.id !==id);
    setPosts(array);
    navigate("/");
  }
  return (
    <div className="App">
   <Header title={"Lejesh Social media"}/>
    <Nav search={search} setSearch={setSearch}/>
    <Routes>
<Route path="/" element={   
    <Home posts={posts}/>}/>
    <Route path='/post'>
     <Route index element={  <NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle}  postBody={postBody} setPostBody={setPostBody}/>}/>
     
     <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
 </Route>

 
  
   
    <Route path='/about' element={  <About/>}/>
    
    <Route path='*' element={  <Missing/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
