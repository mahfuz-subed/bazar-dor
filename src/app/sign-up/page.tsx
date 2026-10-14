"use client";


import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import { useState } from "react";
import Link from "next/link";


const SignUpPage = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const passwordMismatch = confirmPassword.length > 0 && password !==  confirmPassword
  const handleSignUP = async(e: React.SubmitEvent<HTMLElement>) =>{
    e.preventDefault()
    if(passwordMismatch) return;
    const formData = new FormData (e.target)
    const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string}
    console.log(user);

        const {data, error} = await authClient.signUp.email({
         ...user,
          callbackURL: "/"
        })

        if(data){
          console.log(data)
          redirect("/")
        }
        if(error){
          console.log(error)
        }
  }



    return (
        <div className="grid justify-items-center my-10 space-y-3">

          <h1 className="font-bold">একাউন্ট তৈরি করুন</h1>
          <p className="text-gray-600 text-sm">বিনা করছে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>

           <form onSubmit={handleSignUP}> <fieldset className="fieldset  shadow-sm border-base-300 rounded-box w-xs border p-4">


  <label className="label font-bold">নাম</label>
  <input type="text" name="name" className="input" placeholder="আপনার নাম" />

  <label className="label font-bold">ইমেইল</label>
  <input type="email" name="email" className="input" placeholder="you@example.com" />
 
         <label className="label font-bold">পাসওয়ার্ড</label>
         
  <input type="password" className="input" name="password" value={password} placeholder="কমপক্ষে ৮ অক্ষর"  minLength={8}
            required
            pattern="(?=.*[A-Z])(?=.*[0-9]).{8,}"
            title="At least 8 characters, with 1 uppercase letter and 1 number" onChange={(e) => setPassword(e.target.value)}/>
            
 
        <label className="label font-bold">পাসওয়ার্ড নিশ্চিত করুন</label>
         
  <input type="password" className="input" name="confirmPassword" placeholder="আবার লিখুন" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
         {passwordMismatch && (
            <p className="text-error text-sm">Passwords do not match</p>
          )}


  
  

  <button type="submit" className="btn bg-green-600 text-white mt-4">একাউন্ট তৈরী করুন</button>
   <div className="divider">অথবা</div>
          <p className="text-center font-bold">একাউন্ট আছে? <Link href="/sign-in" className="text-green-500 hover:underline">সাইন ইন করুন</Link></p>
</fieldset></form>
        </div>
    );
};

export default SignUpPage;