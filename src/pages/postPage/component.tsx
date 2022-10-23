import React from 'react'
import DisplayPost from '../../components/reusable/displayPost'
import { post } from '../mainPage/interfaces'

export default function Component({ postsToView }: { postsToView: post[] }) {
    return (
        <div>
            {postsToView.map(post =>
                <DisplayPost key={post?.id} post={post} />
            )}
        </div>
    )
}
