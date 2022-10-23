import React from 'react'
import { component } from './interfaces'

export default function Component(props: component) {
    const { label, inputId, inputProps } = props

    return (
        <div className='input-text'>
            <label htmlFor={inputId}>{label}</label>
            <input className='primary-input' id={inputId} {...inputProps} />
        </div>
    )
}
