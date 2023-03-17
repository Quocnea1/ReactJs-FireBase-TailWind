import React from 'react'
import {useState} from "react"

export default function SignIn() {
    const [fromData, setFormData] = useState({
        email: "",
        password:  "",
    });

    const {email,pasword} = fromData;

    function onChange(e){
        setFormData((prevState) =>({
            ...prevState, [e.target.id]: e.target.value,
        }))
    }
  return (
    <section>
        <h1 className=" text-3xl text-center mt-6 font-bold"> Sign In</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-6 max-w-6xl mx-auto">
            <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                <img className="w-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357" alt="logoSignIn" />
            </div>
            <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
                <form className="">
                    <input className="w-full" type="text" id="email" value={email}/>
                </form>
            </div>    
        </div>
    </section>
        
  )
}