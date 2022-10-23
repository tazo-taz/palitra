import React from 'react'
import { main } from './interfaces'
import "./style.css"

export default function Component(props: main) {
    const { children } = props
    return (
        <div className='container'>
            {children}
        </div>
    )
}
