import React, { useState } from 'react'
import { db } from '../../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import './blog.style.css'

function AddPost() {
    const [title, setTitle] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [post, setPost] = useState('')
    const [isFixed, setIsFixed] = useState(false)
    const [author, setAuthor] = useState('')

    async function addPostbd() {
        await addDoc(collection(db, 'posts'), {
            title: title,
            excerpt: excerpt,
            post: post,
            author: author,
            fixed: isFixed
        })
    }

    return (
        <div className='blog-container'>
            <p className='input-label'>Title</p>
            <input
                type='text'
                className='input-container'
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
            </input>
            <p className='input-label'>Excerpt</p>
            <input
                type='text'
                className='input-container'
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
            ></input>
            <p className='input-label'>Author</p>
            <input
                type='text'
                className='input-container'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            ></input>
            <p className='input-label'>Post</p>
            <textarea
                value={post}
                className='input-post'
                onChange={(e) => setPost(e.target.value)}
            ></textarea>
            <div className='fixed'>
            <p>Fixed</p>
                <input type="checkbox" value={isFixed}
                    onChange={() => setIsFixed(!isFixed)} ></input>
            </div>
            <button onClick={() => addPostbd()}>Add Post</button>
        </div>
    )
}

export default AddPost