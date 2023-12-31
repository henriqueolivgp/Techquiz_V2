import { Link } from "react-router-dom";
import FirstBanner from '../components/FirstBanner'


function Login() {
    return (
        <>
            <FirstBanner />
            <div className="container mx-auto ">
                <div className="content mx-auto">

                    <div className=" xl:w-[584px;] xl:h-[661px]  flex justify-center mt-32 max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6 " action="#">
                            <h1 className="text-xl text-center font-bold font-Epilogue text-gray-900 dark:text-white">Sign in</h1>
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                            </div>
                            <div className="flex items-start justify-center">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Remember me <a className="font-medium text-darkAqua text-primary-600 hover:underline dark:text-primary-500" href="#">Forgot password?</a></label>
                                </div>
                            </div>
                            <div className="flex justify-center ">
                                <button type="submit" className="w-80 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            </div>
                            <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                                You don't have an account?<Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500"><span className="text-darkAqua">Register</span></Link>
                            </div>
                            <div>
                                <div className="flex justify-center space-x-10 columns-2 w-full">
                                    <hr className=" w-36 h-[2px] my-4 bg-gray-300 border-0 dark:bg-gray-700" />
                                    <a href="#">Or sign in with</a>
                                    <hr className=" w-36 h-[2px] my-4 bg-gray-300 border-0 dark:bg-gray-700" />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;

