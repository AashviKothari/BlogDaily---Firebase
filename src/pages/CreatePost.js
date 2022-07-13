import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase-config';
import {addDoc, collection} from 'firebase/firestore'

function CreatePost({isAuth}) {

  const [title, setTitle] = useState("");
  const [postText, setPostText ] = useState("");

  const postCollectionRef = collection(db,"posts")
  let navigate = useNavigate();
  const createpost = async()=>{
    await addDoc(postCollectionRef, {title, postText, author: {name: auth.currentUser.displayName , id: auth.currentUser.uid },}
      )
      navigate("/")
  }
  useEffect(()=>{
    if(!isAuth){
      navigate("/login");
    }
  }, []);

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
          <h1>Create Post</h1>
          <div className='inputGp'>
            <label>Title:</label>
            <input placeholder='Title...' onChange={(event)=>{setTitle(event.target.value)}
            }
            />
          </div>
          <div className='inputGp'>
          <label>Blog:</label>
            <textarea placeholder='Blog Body here...' onChange={(event)=>{setPostText(event.target.value)}
            }/>
          </div>
          <button onClick={createpost}>Submit Post!</button>
      </div>
    </div>
  )
}

export default CreatePost
