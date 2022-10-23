import React, { useEffect, useRef } from 'react'
import useFetch from '../../../hooks/useFetch'
import useToggle from '../../../hooks/useToggle'
import { post } from '../../../pages/mainPage/interfaces'
import Component from './component'

export default function Container({ post }: { post: post }) {
    const { data: commentsData } = useFetch("https://jsonplaceholder.typicode.com/comments?postId=" + post?.id)
    const postRef = useRef<HTMLInputElement>()
    const [show, setShow] = useToggle(false)
    const newProps = {
        post,
        comments: commentsData,
        show,
        setShow,
        postRef
    }

    useEffect(() => {
        function scroll() {
            const rect = postRef.current?.getBoundingClientRect()
            const height = rect?.height
            const top = rect?.top

            const middleYCoord = window.scrollY + window.innerHeight / 2

            if (top !== undefined && height !== undefined) {
                const newTop = top + window.scrollY
                if (middleYCoord > newTop && middleYCoord < newTop + height) {
                    window.history.pushState({}, "", "/post/" + post.id);
                }
            }


        }
        window.addEventListener("scroll", scroll)
        return () => window.removeEventListener("scroll", scroll)

    }, [])

    return (
        <Component
            {...newProps}
        />
    )
}
