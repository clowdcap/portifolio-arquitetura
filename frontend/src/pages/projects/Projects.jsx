import React, { useState, useEffect } from 'react'

import { api } from './../../lib/axios'

import ItemProject from '../../components/project/ItemProject'


const Projects = () => {

  const [posts, setPosts] = useState([])

  useEffect(()=> {
      const fetchPosts = async ()=> {
          const res = await api.get('/posts')
          setPosts(res.data)
          console.log(res.data)
      }
      fetchPosts()
  }, [])


  return (
    <>
      <ItemProject posts={posts}/>
    </>
  )
}

export default Projects