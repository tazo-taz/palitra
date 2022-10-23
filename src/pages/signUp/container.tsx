import { useRef } from 'react'
import Component from './component'
import { useNavigate } from "react-router-dom";

export default function Container(props: any) {
    const usernameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const repeatPasswordRef = useRef<HTMLInputElement>()

    const navigate = useNavigate();

    const submit = (e: MouseEvent) => {
        e.preventDefault()

        const repeatPassword = repeatPasswordRef.current?.value
        const password = passwordRef.current?.value
        const username = usernameRef.current?.value

        if ((password === repeatPassword) && password && username) navigate('/signin')
        else alert("fill username and passwords fields correctly")
    }


    const newProps = {
        submit,
        usernameInputProps: {
            ref: usernameRef
        },
        passwordInputProps: {
            type: "password",
            ref: passwordRef,
        },
        repeatPasswordInputProps: {
            type: "password",
            ref: repeatPasswordRef,
        }
    }

    return (
        <Component
            {...props}
            {...newProps}
        />
    )
}
