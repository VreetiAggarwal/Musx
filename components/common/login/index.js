import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import { useRef } from "react";

function LogIn() {
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
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
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
            <div className="py-10">
              <h1 className=" text-3xl font-bold text-rose-300 mb-10">
                Log IN
              </h1>

              <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit}
              >
                <div className="bg-white-100 w-80 p-2 flex items-center text-rose-300">
                  <label className="text-left mr-1">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="rounded-2xl px-2"
                    placeholder=""
                    ref={usernameInputRef}
                    required
                  />
                </div>

                <div className="bg-white-100 w-80 p-2 flex items-center text-rose-300">
                  <label className="text-left mr-1">Password</label>
                  <input
                    type="password"
                    id="pw"
                    className="rounded-2xl align-right"
                    placeholder=""
                    ref={pwInputRef}
                    required
                  />
                </div>

                <div className="text-right py-3 px-5">
                  <Link href="#">
                    <div className="text-rose-300 w-80 cursor-pointer">
                      Forgot password?
                    </div>
                  </Link>
                </div>

                <div className="bg-white-100 w-80 p-2 text-rose-300">
                  <button
                    className="border-2 mt-3 border-rose-300 rounded-full hover:bg-rose-300 hover:text-black px-12 py-2 inline-block font-semibold"
                    type="submit"
                    id="btn"
                  >
                    LogIN
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-2/5 bg-rose-400 text-black rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
            <h2 className="text-2xl font-bold mb-2">
              Listen to MusX Anywhere!
            </h2>
            <p>Fill up personal information and start journey with us.</p>
            <p mt-3>Don't have an account?</p>
            <Link href="/subscribe">
              <a className="border-2 mt-6 border-black rounded-full hover:bg-black hover:text-white px-12 py-2 inline-block font-semibold">
                Sign UP
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LogIn;
