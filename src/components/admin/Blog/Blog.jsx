import React, { useState, useEffect } from 'react'
import { db } from '../../../firebase'
import { collection, addDoc, getDocs, query } from 'firebase/firestore'
import './blog.style.css'
import AddPost from './AddBlog'

function Blog() {
    const [posts, setPost] = useState([])
    const [isAddPost, setIsAddPost] = useState(false)

    useEffect(() => {
        async function getPosts() {
            const colRef = collection(db, 'posts');
            const getPostsbd = await getDocs(query(colRef));
            setPost(
                getPostsbd.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            )
        }
        getPosts()
    }, [])

    return (
        <div className='blog-container'>
            <h1>Blog</h1>

            <button
                onClick={() => setIsAddPost(!isAddPost)}>
                Add post</button>
            {!isAddPost ?
                <div>
                    <table className="paleBlueRows">
                        <thead>
                            <tr>
                                <td>Titulo</td>
                                <td>Autor</td>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) =>
                                <tr key={index}>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>editar</td>
                                    <td>borrar</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                :
                <AddPost />
            }
        </div>
    )
}

export default Blog