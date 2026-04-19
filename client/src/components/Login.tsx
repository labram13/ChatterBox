import './Onboarding.css'
import Logo from '../assets/chatterbox.svg?react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'


interface Credentials {
    username: string,
    password: string
}
export default function Login() {
    const form = useForm<Credentials>()

    const { register, control, handleSubmit, formState, setError, watch} = form

    const onSubmit = async (data:Credentials) => {
        console.log('submit working')
    }

    return (
        <form  onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="login-header">
                <Logo />
                <h2>Login</h2>
            </div>

            <div className="input">
                <input type='text' id='username' placeholder='Username'/>
            </div>

            <div className='input'>
                <input type='text' id='password' placeholder='Password'/>

            </div>

            <button type='submit'>Login</button>

        </form>
    )
}
