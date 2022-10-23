import React from 'react'
import AuthForm from '../../components/reusable/authForm'
import { component } from './interfaces'
import { Link } from 'react-router-dom'
import "./style.css"
import { urls } from '../../constants'

export default function Component(props: component) {
    const { passwordInputProps, usernameInputProps, submit } = props
    const { signUpUrl, forgotPassword } = urls

    return (
        <>
            <AuthForm
                title="Sign in"
                inputs={[
                    { label: "Username", inputProps: usernameInputProps },
                    { label: "Password", inputProps: passwordInputProps },
                ]}
                button={{ clickEvent: submit }}
                additionalHTML={
                    <>
                        <Link className='forgot-password-link' to={forgotPassword}>Forgot password?</Link>
                        <Link className='forgot-password-link' to={signUpUrl}>Don't have an account?</Link>
                    </>
                }
            />
        </>
    )
}
