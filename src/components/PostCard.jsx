import React from 'react'

export default function PostCard({data}) {
  return (
    <div className='grid grid-cols-5 gap-5 mt-10'>
        {
            data?.map(p=><div className='border-2 p-3' key={p?._id}>
                <p>{p?.title}</p>
                <p>{p?.body}</p>
            </div>)
        }
    </div>
  )
}
