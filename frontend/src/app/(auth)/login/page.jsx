'use client'
import * as motion from "motion/react-client"
import Link from "next/link";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLoader2Fill } from "react-icons/ri";
import { ImSpinner2 } from "react-icons/im";



export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isLoading = false

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-md w-full bg-green-950 bg-opacity-50 backdrop:filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">

            <form onSubmit={handleLogin}
                className="flex flex-col justify-center items-center py-7 gap-4">

                <h1 className="text-2xl text-green-500">Welcome Back</h1>

                <div className="relative w-4/5  ">
                    <CiMail className="absolute top-1.5 left-2 text-green-500 size-6" />
                    <input type="email"
                        className="w-full bg-gray-900 rounded-md py-1.5 text-gray-400 pl-10"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="relative w-4/5  ">
                    <RiLockPasswordLine className="absolute top-1.5 left-2 text-green-500 size-6" />
                    <input type="text"
                        className="w-full bg-gray-900 rounded-md py-1.5 text-gray-400 pl-10"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Link href='/forgotPassword'
                    className="self-start pl-12 text-green-500 hover:underline"
                > Forgot password?</Link>

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 via-green-600 to-green-800 w-4/5 py-2 rounded-xl text-white text-xl font-semibold flex justify-center "
                >
                    {isLoading ?
                        <div className="flex gap-2 items-center"><ImSpinner2 className="text-white size-6 animate-spin" /> <h1 className="animate-pulse">Loading...</h1> </div> :
                        "Login"}
                </motion.button>

            </form>
            <div className="w-full bg-gray-900 flex justify-center items-center py-3 gap-1 text-gray-400">
                <h1>Don't have an account? </h1>
                <Link href='/signup'
                    className="text-green-500 hover:underline"> Sign up</Link>
            </div>
        </motion.div>
    );
}