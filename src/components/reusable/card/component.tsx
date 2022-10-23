import React from 'react'
import { Link } from 'react-router-dom';
import { main } from './interfaces';
import "./style.css"
export default function Component(props: main) {
    const { post: { body, title, id, userData } } = props
    const name = userData?.name

    return (
        <div className='card'>
            <h4>{title}</h4>
            <p>{body}</p>
            <p>Created by <span className='black-bold'>{name}</span></p>
            <Link to={"/post/" + id}>View more</Link>
        </div>
    )
}
