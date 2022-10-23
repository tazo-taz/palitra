import React from 'react'
import Component from './component'
import { main } from './interfaces'

export default function Container(props: main) {
    return (
        <Component {...props} />
    )
}
