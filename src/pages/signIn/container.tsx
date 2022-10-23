import { useRef } from 'react'
import Component from './component'
import { useNavigate } from "react-router-dom";

export default function Container(props: any) {
    const usernameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate();

    const submit = (e: MouseEvent) => {
        e.preventDefault()

        const password = passwordRef.current?.value
        const username = usernameRef.current?.value

        if (password && username) navigate('/')
        else alert("fill username and password fields")
    }


    const newProps = {
        submit,
        usernameInputProps: {
            ref: usernameRef
        },
        passwordInputProps: {
            type: "password",
            ref: passwordRef,
        }
    }

    return (
        <Component
            {...props}
            {...newProps}
        />
    )
}
