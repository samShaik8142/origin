import React from 'react'
import Comment from './Comment'

export default function Comments() {
  return (
    <div className='containerT2'>
    <h2>45 Comments</h2>

    <Comment >
    <div className='sub-container'>
    <div >
        <img className='logo' src="data:image/jpeg;base64,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" alt="User image" />
    </div>
    <div className='content'>
        <div><h3 className='name'>Rahul Gupta </h3><span>2months</span></div>
        <h4>this is a Great Post</h4>
    </div>
    </div>
    </Comment>
   <Comment >
    <div className='sub-container'>
    <div >
        <img className='logo' src="data:image/jpeg;base64,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" alt="User image" />
    </div>
    <div className='content'>
        <div><h3 className='name'>Rahul Gupta </h3><span>2months</span></div>
        <h4>this is a Great Post</h4>
    </div>
    </div>
    </Comment>
   </div>
  )
}