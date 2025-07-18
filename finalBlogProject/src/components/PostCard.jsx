import React from 'react'
import appwriteService from '../appwrite/config';
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    // here href is not used because we are using react-router-dom Link component to navigate to the post page
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-600 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
                className='rounded-xl'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard