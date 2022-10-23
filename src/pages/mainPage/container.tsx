import { useState } from 'react'
import Component from './component'
import useFetch from '../../hooks/useFetch'
import { component } from './interfaces'
import { useSelector } from "react-redux"
import { reduxInitialState } from '../../redux'

export default function Container() {
    const { posts } = useSelector((a: reduxInitialState) => a)
    const [page, setPage] = useState(1)

    const pages = posts ? posts.length / 20 : 0

    const newProps: component = {
        posts: posts || [],
        page,
        setPage,
        pages
    }



    return (
        <Component
            {...newProps}
        />
    )
}
