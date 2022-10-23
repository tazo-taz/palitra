import React from 'react'
import Card from '../../components/reusable/card';
import { component } from './interfaces'
import "./style.css"

export default function Component(props: component) {
    const { posts, pages, page, setPage } = props

    if (!pages) return <h1>Loading</h1>

    const pagesArr = new Array(pages).fill("")
    const postsToShow = posts.slice(20 * (page - 1), 20 * (page))

    return (
        <div>
            <div className='posts-container'>
                {postsToShow?.map(post => <Card key={post.id} post={post} />)}
            </div>
            <div className='center gap-1'>
                {pagesArr.map((a, index) => {
                    const btnPage = index + 1
                    return <button key={btnPage} onClick={() => setPage(btnPage)} className={'primary-button' + (page === btnPage ? " active" : "")}>{btnPage}</button>
                })}
            </div>
        </div>
    )
}
