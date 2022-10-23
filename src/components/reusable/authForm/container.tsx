import React from 'react'
import Component from './component'
import { main } from './interface'

export default function Container(props: main) {
    return (
        <Component {...props} />
    )
}
