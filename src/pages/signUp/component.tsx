import React from 'react'
import { Link } from 'react-router-dom'
import AuthForm from '../../components/reusable/authForm'
import { component } from './interfaces'
import { urls } from '../../constants'

export default function Component(props: component) {
    const { passwordInputProps, usernameInputProps, repeatPasswordInputProps, submit } = props

    const { signInUrl } = urls

    return (
        <>
            <AuthForm
                title="Sign up"
                inputs={[
                    { index: 0, label: "Username", inputProps: usernameInputProps },
                    { index: 1, label: "Password", inputProps: passwordInputProps },
                    { index: 2, label: "Repeat password", inputProps: repeatPasswordInputProps },
                ]}
                button={{ clickEvent: submit }}
                additionalHTML={<Link className='forgot-password-link' to={signInUrl}>Already have an account?</Link>}
            />
        </>
    )
}
