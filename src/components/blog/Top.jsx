import React from 'react'
import Item from './Item'

function Top({posts, fixed}) {
    return (
        <div className='top-post-container'>
            <div className='fixed-posts'>
                {fixed.map((post, index) =>
                    <div key={index}>
                        <Item
                            title={post.title}
                            excerpt={post.excerpt}
                            post={post.post}
                            category='fixed'
                        />
                    </div>
                )}
            </div>
            <div className='top-posts'> 
                {posts.map((post, index) =>
                    <div key={index}>
                        <Item 
                            title={post.title} 
                            excerpt={post.excerpt}
                            post={post.post}
                            category='top'
                            />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Top