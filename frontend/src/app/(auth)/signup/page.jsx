'use client'
import * as motion from "motion/react-client"
import { CiMail } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import PasswordStrengthMeter from "@/components/passwordStrength";
import PasswordCriteria from "@/components/passwordCriteria";

// import styles from './signup.module.css'
export default function SignupPage() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleSignup = (e) => {
        e.preventDefault()
    }
    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full bg-green-950 bg-opacity-50 backdrop:filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
        >
            <form className="h-full w-full p-8 flex flex-col gap-5 justify-center items-center">
                <h1 className="text-xl text-green-300 text-center ">Create Account</h1>

                {/* name */}
                <div className="w-full relative" >
                    <AiOutlineUser className="size-6 stroke-green-300 text-green-500 absolute  left-1 top-1 " />
                    <input type="text" className="bg-gray-800 w-full rounded-md  py-1 pl-10 placeholder-gray-400 text-gray-300" placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* email */}
                <div className="w-full relative" >
                    <CiMail className="size-6 stroke-green-300 text-green-500 absolute insert-y-0 left-1 top-1 " />
                    <input type="email" className="bg-gray-800 w-full rounded-md  py-1 pl-10 placeholder-gray-400 text-gray-300" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className="w-full relative" >
                    <RiLockPasswordLine className="size-6 stroke-green-300 text-green-500 absolute insert-y-0 left-1 top-1 " />
                    <input type="text" className="bg-gray-800 w-full rounded-md  py-1 pl-10 placeholder-gray-400 text-gray-300" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {/* Passwod strength meter */}
                <PasswordStrengthMeter password={password}/>
                

                {/* Password requirement */}
                <PasswordCriteria password={password}/>
               
                {/* button */}
                <motion.button className="w-5/6 py-2 bg-gradient-to-r from-green-500 to-green-800 text-center text-white text-md rounded-lg hover:from-emerald-500 hover:to-emerald-700"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Sign Up
                </motion.button>
            </form>
            <div className="w-full h-10 bg-gray-900 flex justify-center text-gray-400 py-2 gap-1.5">
            <p>Already have an account?</p>
            <Link href='/login' className="text-green-600 hover:underline" > Log in</Link>
            </div>

        </motion.div>
    );
}