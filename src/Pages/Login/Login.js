import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const handleOnSubmit = (data) => {
        const { email, password } = data
        console.log(email, password)
    }

    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 lg:w-[400px] shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleOnSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', { required: 'Field is required' })} type="email" placeholder="email" className="input input-bordered text-primary" />
                                <p className='text-red-800 font-medium text-start mt-1'>{errors.email?.message}</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', { required: 'Field is required' })} type="password" placeholder="password" className="input input-bordered text-primary" />
                                <p className='text-red-800 font-medium text-start mt-1'>{errors.password?.message}</p>
                                <label className='mt-3'>
                                    <span className="mr-2 label-text">New here?</span>
                                    <Link to='/register' className="label-text link link-hover">Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;