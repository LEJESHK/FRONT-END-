import React from 'react'

const NewPost = ({handleSubmit,postTitle,setPostTitle,postBody,setPostBody}) => {
  return (
    <main className='NewPost'>
    <h2>New Post</h2>
    <form className="newPostForm" onSubmit={handleSubmit}>
<label>Title:</label><br></br>
<input id="postTitle"
type="text"
required
value={postTitle}
onChange={(e)=>setPostTitle(e.target.value)}
></input><br></br>
<label>
    Post:
</label><br></br>
<textarea id="postBody"
type="text"
required
value={postBody}
onChange={(e)=>setPostBody(e.target.value)}
></textarea><br>
</br>
<button type="submit">SUBMIT</button>
    </form>
     </main>
  )
}

export default NewPost;