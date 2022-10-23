import React from 'react'
import { component } from './interfaces'
import "./style.css"

export default function Component({ post, comments, show, setShow, postRef }: component) {
    if (!post) return <h3>Loading</h3>

    const name = post?.userData?.name
    const username = post?.userData?.username
    const email = post?.userData?.email

    const filteredComments = comments?.slice(0, show ? comments.length : 5) || []

    return (
        <div className='display-post-container' ref={postRef}>
            <h3>Post data {post.id}</h3>
            <ul>
                <li>Name: {post.title}</li>
                <li>Description: {post.body}</li>
            </ul>
            <hr />
            <h3>User data</h3>
            <ul>
                <li>name: {name}</li>
                <li>username: {username}</li>
                <li>email: {email}</li>
            </ul>
            <hr />
            <h3>Comments</h3>
            <ol>
                {filteredComments.map(comment => <li key={comment.id}>
                    <br />
                    <ul className='comment'>
                        <li>Comment name: {comment.name}</li>
                        <li>Comment description: {comment.body}</li>
                        <li>Comment email: {comment.email}</li>
                    </ul>
                </li>
                )}
            </ol>
            <button onClick={() => setShow()} className='primary-button'>{show ? "Hide" : "Show"}</button>
        </div>
    )
}
