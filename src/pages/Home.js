import React, { useEffect, useState } from 'react'
import {getDocs} from 'firebase/firestore'
function Home() {

  const [postList, setPostList] = useState([]);

  useEffect(()=>{
    const getPosts = async() =>{
      const data = await getDocs()
    }
  })
  return (
    <div className='homePage'>
      
    </div>
  )
}

export default Home
