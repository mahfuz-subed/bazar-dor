"use client";


import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import { useState } from "react";
import Link from "next/link";


const SignInPage = () => {

  const handleSignIn = async(e: React.SubmitEvent<HTMLElement>) =>{
    e.preventDefault()
 
    const formData = new FormData (e.target)
    const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string}
    console.log(user);

        const {data, error} = await authClient.signIn.email({
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

          <h1 className="font-bold">সাইন ইন</h1>
          <p className="text-gray-600 text-sm">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে একাউন্টে ঢুকুন।</p>

           <form onSubmit={handleSignIn}> <fieldset className="fieldset  shadow-sm border-base-300 rounded-box w-xs border p-4">




  <label className="label font-bold">ইমেইল</label>
  <input type="email" name="email" className="input" placeholder="you@example.com" />
 
         <label className="label font-bold">পাসওয়ার্ড</label>
         
  <input type="password" className="input" name="password" placeholder="কমপক্ষে ৮ অক্ষর" ></input>
            



  
  

  <button type="submit" className="btn bg-green-600 text-white mt-4">সাইন ইন</button>
   <div className="divider">অথবা</div>
          <p className="text-center font-bold">একাউন্ট নেই? <Link href="/sign-up" className="text-green-500 hover:underline">সাইন আপ করুন</Link></p>
</fieldset></form>
            <Link href="/" className="text-gray-500 hover:underline">হোমপেজে ফিরে যান</Link>
        </div>
    );
};

export default SignInPage;