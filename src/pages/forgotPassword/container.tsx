import { useRef } from 'react'
import Component from './component'
import { useNavigate } from "react-router-dom";

export default function Container(props: any) {
    const usernameRef = useRef<HTMLInputElement>()

    const navigate = useNavigate();

    const submit = (e: MouseEvent) => {
        e.preventDefault()

        const username = usernameRef.current?.value

        if (username) navigate('/signin')
        else alert("fill username field correctly")
    }


    const newProps = {
        submit,
        usernameInputProps: {
            ref: usernameRef
        }
    }

    return (
        <Component
            {...props}
            {...newProps}
        />
    )
}
