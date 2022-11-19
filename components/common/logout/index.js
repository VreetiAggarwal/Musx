import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { useRef } from "react";

function LogOut() {
  const usernameInputRef = useRef();
  const pwInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const enteredUser = usernameInputRef.current.value; //we can extract what the user entered
    const enteredPw = pwInputRef.current.value;

    const signupData = {
      username: enteredUser,
      pw: enteredPw,
    };

    console.log(signupData);
  };

  return (
    <div className="flex mt-20 flex-col items-center justify-center py-2 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 bg-black">
        <div className="bg-white bg-opacity-10 rounded-2xl text-center shadow-2xl  flex w-2/3 max-w-4xl ">
          {/*}it will wrap the two section created inside{*/}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold py-0">
              <span className="text-rose-300 ">MusX</span>
            </div>
            <div className="py-5">
              <h1 className="text-3xl text-center font-bold text-rose-300 mb-10">
                Do you wish to LogOut?
              </h1>

              <div className="bg-white-100 w-80 p-2 text-rose-300">
                <Link
                  className="border-2 mt-3 border-rose-300 rounded-full hover:bg-rose-300 hover:text-black px-12 py-2 inline-block font-semibold"
                  href="/"
                >
                  LogOut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LogOut;
