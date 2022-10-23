import React from 'react'
import AuthContainer from '../authContainer'
import InputText from '../inputText'
import { main } from './interface'

export default function Component(props: main) {
    const { button: { clickEvent, title: btnTitle = "SUBMIT" }, title, inputs, additionalHTML = null } = props
    return (
        <AuthContainer>
            <form>
                <h2>{title}</h2>
                <div className='inputs-form'>
                    {inputs.map(({ index, ...input }, indexx) =>
                        <InputText key={index || indexx} {...input} />
                    )}
                </div>
                <div className="center">
                    <button className='primary-button' onClick={e => clickEvent(e)}>{btnTitle}</button>
                </div>
                {additionalHTML}
            </form>
        </AuthContainer>
    )
}
