import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Pagelayout from './Pagelayout';
import { useState } from 'react';
const PostPage = ({posts,handleDelete}) => {
    const {id}=useParams();
    const post=posts.find(post=>(post.id).toString()===id);
  return (
    <main>
        {post &&
   <> <h1>{post.title}</h1>
    <p>{post.datetime}</p>
    <p>{post.body}</p>
    <button onClick={()=>handleDelete(post.id)}>DELETE POST</button></>
}

  
    </main>
  )
}

export default PostPage;