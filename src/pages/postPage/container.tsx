import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { post } from '../mainPage/interfaces';
import Component from './component'

export default function Container() {
    const { id } = useParams()

    const { data: postData } = useFetch("https://jsonplaceholder.typicode.com/posts/" + id)
    const { data: postData2 } = useFetch("https://jsonplaceholder.typicode.com/posts/" + (Number(id) + 1))
    const [postsToView, setPostToView] = useState<post[]>([])

    const newProps = {
        postsToView
    }

    useEffect(() => {
        if (postData) {
            setPostToView(a => {
                const newPostsToView = [...a]
                newPostsToView[0] = postData
                return newPostsToView
            })
        }
    }, [postData])

    useEffect(() => {
        if (postData2) {
            setPostToView(a => {
                const newPostsToView = [...a]
                newPostsToView[1] = postData2
                return newPostsToView
            })
        }
    }, [postData2])


    useEffect(() => {
        async function infinitePost(ev: any) {
            const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
            if (isScrolledToBottom) {
                try {
                    const newId = Number(id)
                    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/" + (+(newId || 0) + +postsToView.length))
                    if (data) setPostToView(a => ([...a, data]))
                } catch (error) {
                    console.log(error);

                }

            }
        }

        window.addEventListener("scroll", infinitePost)
        return () => window.removeEventListener("scroll", infinitePost)
    }, [postsToView.length, id])



    return (
        <Component
            {...newProps}
        />
    )
}
