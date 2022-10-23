import { useMemo } from 'react'
import Component from './component'
import { main } from './interfaces'

export default function Container(props: main) {
    const inputId = useMemo(() => "inputId" + Math.floor(99999999 * Math.random()), [])

    const newProps = {
        inputId
    }

    return (
        <Component
            {...props}
            {...newProps}
        />
    )
}
