import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Register = () => {
    const [loadin, setLoaing] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const navigate = useNavigate()
    /* User context API here */
    const { createUser, updateUserProfile } = useContext(AuthContext)

    /* Created user from here */
    const handleOnSubmit = (data) => {
        setLoaing(true)
        const { email, password, name } = data
        createUser(email, password)
            .then((res) => {

                navigate('/')
                /* Update user profile */
                updateUserProfile(name).then(() => {
                    saveUserDataBase(res?.user)
                }).catch(error => console.log(error))
                toast.success('Registration Successfull')
                setLoaing(false)

                reset()

            }).catch(error => {
                setLoaing(false)
                reset()
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('User already registered')
                }
            })
    }

    /* Save user database here */
    const saveUserDataBase = (user) => {
        axios.post(`${process.env.REACT_APP_api_url}/save-user`, {
            userName: user?.displayName,
            userEmail: user?.email,
            role: "buyer"
        }).then().catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 lg:w-[400px] shadow-2xl bg-primary">
                        <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input {...register('name')} type="name" placeholder="name" className="input input-bordered text-primary" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input {...register('email', { required: 'Field is required' })} type="email" placeholder="email" className="input input-bordered text-primary" />
                                <p className='text-red-800 font-medium text-start mt-1'>{errors.email?.message}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input {...register('password', { required: 'Field is required', minLength: { value: 6, message: "Password must be 6 characters or longer" } })} type="password" placeholder="password" className="input input-bordered text-primary" />
                                <p className='text-red-800 font-medium text-start mt-1'>{errors.password?.message}</p>
                                <label className='mt-3'>
                                    <span className="mr-2 label-text text-white">All ready have an account?</span>
                                    <Link to='/login' className="label-text text-white link link-hover">Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary text-white">{loadin ? "processing...." : "Register"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;