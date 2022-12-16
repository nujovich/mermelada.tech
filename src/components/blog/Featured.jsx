import React from 'react'

function Featured({ posts }) {
        return (
        <div className='featured-container'>
                {posts.map((post, index) =>
                        <div className='featured-post' key={index}>
                                <img 
                                        className='featured-image'
                                        src='../../../public/default-thumbnail.jpg' />
                                <h3> {post.title}</h3>
                                <p>{post.excerpt}</p>
                        </div>
                )}
        </div>

        )
}

export default Featured