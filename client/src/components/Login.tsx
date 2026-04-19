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
    const { errors } = formState;

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
                <input type='text' id='username' placeholder='Username' {...register("username", {
                    required: {
                        value: true,
                        message: "Please enter username"
                    }
                })}/>
                <p className='error'>{errors.username?.message}</p>
            </div>

            <div className='input'>
                <input type='text' id='password' placeholder='Password' {...register('password', {
                    required: {
                        value: true,
                        message: "Please enter password"
                    }
                })}/>
            <p className='error'>{errors.password?.message}</p>

            </div>

            <button type='submit'>Login</button>

        </form>
    )
}
