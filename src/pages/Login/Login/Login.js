import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn, googleSignIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const provider = new GoogleAuthProvider()

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname || "/";

    const handlerGoogleSignIn = () => {
        googleSignIn(provider)
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch((e) => console.error(e))
    }

    const handleLogin = data => {
        console.log(data)

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginError('')
                // setLoginUserEmail(data.email)
                navigate(from, { replace: true })
            })
            .catch(e => {
                setLoginError(e.message)
                console.error(e)
            })
    }

    return (
        <div className='h-[480px] flex justify-center mt-6 mb-20'>
            <div className='w-96 bg-slate-300 p-7'>
                <h1 className='text-2xl mb-3 font-bold text-primary text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full"
                            {...register("email", { required: "Email Address is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className='text-red-600' >{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full"
                            {...register("password", {
                                required: "Password Address is required",
                                minLength: { value: 8, message: "Password must be 8 charactures or longer" }
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p className='text-red-600' >{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary text-white w-full rounded-xl mt-4 input-sm' value='login' type="submit" />
                </form>
                {
                    loginError && <p className='text-red-600'>{loginError}</p>
                }
                <small>New to Carmax? <Link className='text-primary' to='/signup'>Create a new account</Link></small>
                <div className="divider">or</div>
                <button onClick={handlerGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;