import React from 'react'
import { Link } from 'react-router-dom'
import AuthForm from '../../components/reusable/authForm'
import { component } from './interfaces'

export default function Component(props: component) {
    const { usernameInputProps, submit } = props

    return (
        <>
            <AuthForm
                title="Forgot password"
                inputs={[
                    { index: 0, label: "Username", inputProps: usernameInputProps },
                ]}
                button={{ clickEvent: submit }}
                additionalHTML={<Link className='forgot-password-link' to="/signin">Already have an account?</Link>}
            />
        </>
    )
}
