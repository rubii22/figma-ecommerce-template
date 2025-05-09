// import Image from "next/image"


// function Signup(){
//     return(
//         <div className="w-full flex sm:flex-col md:flex-col lg:flex-row justify-start items-start">
//         {/* left */}
//         <div className="sm:w-full md:w-full lg:w-[500px] sm:h-full lg:h-[500px] sm:m-0 sm:mt-10 lg:m-11 cursor-pointer">
//         <Image src={"/mobile.png"}
//         width={400}
//         height={400}
//         alt="Mobile"
//         className="w-full"></Image>
       
//         </div>
//         {/* right */}
//         <div className="sm:w-full lg:w-[600px] sm:h-full lg:h-[500px] my-11 flex flex-col justify-center items-center">
//         <div className="w-[70%] h-[80%] ">
//         <div>
//         <h1 className="sm:text-lg md:text-2xl lg:text-3xl">Create an account</h1>
//         <p className="text-sm pt-2">Enter your details below</p>
//         </div>
//         <form action="" >
//         <input type="text" placeholder="Name" className="py-2 px-3 mt-5 bg-transparent border-b-2"/> <br />
//         <input type="email" placeholder="Email or Phone Number" className="py-2 px-3 mt-5 bg-transparent border-b-2 "/> <br />
//         <input type="password" placeholder="password" className="py-2 px-3 mt-5 bg-transparent border-b-2"/> <br />
//         {/* <button className='bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm '>Create Account</button> */}
//         <input className="py-2 px-12 mt-5 bg-red-500 hover:bg-red-600 text-white rounded-sm " type="button" value="Create Account" />
//         </form>
//         </div>
//         </div>
//         </div>
//         )
//        }
//        export default Signup
 

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] p-8 gap-4 rounded-[4px] opacity-100">
        <div className="w-full md:w-1/2 h-auto mb-4 md:mb-0">
          <Image
            src="/mobile.png" 
            alt="Signup"
            width={800}
            height={800}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 h-auto bg-white rounded-lg p-8">
          <h2 className="text-[28px] md:text-[36px] font-medium mb-4">Create an account</h2>
          <p className="text-[14px] md:text-[16px] mb-4">Enter your details below</p>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border-b border-gray-400 focus:outline-none  rounded"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full p-3 mb-4 border-b border-gray-400 focus:outline-none rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border-b border-gray-400 focus:outline-none rounded"
            />
            <button type="submit" className="w-full bg-[#DB4444] text-white p-3 rounded-md mt-4">
              Create Account
            </button>
          </form>
          <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex items-center space-x-2 mt-4">
              <Image
                src="/google.png" 
                alt="Signup"
                width={24}
                height={24}
                className="w-[24px] h-[24px] object-cover"
              />
              <p className="text-[16px]">Sign up with Google</p>
            </div>
            <p className="text-[16px] mt-4 text-center">
              Already have an account?{' '}
              <Link href="/Login" className="text-black">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;