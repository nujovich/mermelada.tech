import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import Item from './Item'
import Top from './Top'
import Featured from './Featured';


function Home() {
    const [posts, setPosts] = useState([])
    const [fixedPosts, setFixedPosts] = useState([])
    const [allPost, setSllPost] = useState([])

    useEffect(() => {
        async function getPosts() {
            const colRef = collection(db, 'posts');

            const getPostsbd = await getDocs(query(colRef, where('fixed', '==', false), limit(3)));
            const resultPost = await getDocs(query(colRef, where('fixed', '==', true)));
            const allPostResult = await getDocs(query(colRef));

            setFixedPosts(
                resultPost.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            )
            setPosts(
                getPostsbd.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            )
            setSllPost(
                allPostResult.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            )
        }
        getPosts()
    }, [])

    return (
        <div>
            <div className='header-blog'>
                <h1 className='title-blog'>Mermelada.Blog</h1>
                <div>
                    <Top
                        posts={posts}
                        fixed={fixedPosts}
                    />
                </div>
            </div>
            <div className="top-posts">
            <h1 className='subtitle-blog'>Destacados</h1>

                <Featured 
                    posts={allPost}
                    />
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home