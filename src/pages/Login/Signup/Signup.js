import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
// import useToken from '../../hooks/useToken';

const Signup = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const { creatUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname || "/";

    // if (token) {
    //     navigate(from, { replace: true })
    // }

    const handleSignup = data => {
        console.log(data)
        creatUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('User Created Successfully')
                navigate(from, { replace: true })
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        // saveUser(data?.name, data?.email)
                    })
                    .catch(e => console.error(e))
            })
            .catch(e => {
                console.error(e)
                setSignUpError(e.message)
            })
    }

    // const saveUser = (name, email) => {
    //     const user = { name, email }

    //     fetch('http://localhost:5000/users', {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setCreatedUserEmail(email)
    //             // getUserToken(email)
    //         })
    // }



    return (
        <div className='h-[500px] flex justify-center mt-1 mb-24'>
            <div className='w-96 p-7'>
                <h1 className='text-3xl mb-2 font-bold text-center'>Sign up</h1>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Your Name</span></label>
                        <input type="text" className="input input-bordered w-full"
                            {...register("name", { required: "Name is required" })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && <p className='text-red-600' >{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full"
                            {...register("email", { required: "Email Address is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className='text-red-600' >{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Role</span></label>
                        <select type="role" className="select select-bordered w-full max-w-xs"
                            {...register("role", { required: "Role is required" })}
                            aria-invalid={errors.role ? "true" : "false"} >
                            <option>Seller</option>
                            <option>User</option>
                        </select>
                        {errors.role && <p className='text-red-600' >{errors.role?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be 8 charactures or longer" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be stronger' }
                            })}
                            aria-invalid={errors.password ? "true" : "false"} />
                        {errors.password && <p className='text-red-600' >{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full rounded-xl input-sm mt-1' value='Sign up' type="submit" />
                </form>
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
                <small>Already have an account? <Link className='text-secondary' to='/login'>please login</Link></small>
                <div className="divider">or</div>
                <button className='btn btn-outline w-full mb-48'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;