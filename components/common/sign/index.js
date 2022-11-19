import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useRef } from "react";
import { useRouter } from "next/router";
import { EDGE_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";
import { mutate } from "swr";

const Sign = ({ formId, userForm, forNewUser = true }) => {
  const router = useRouter();
  const [errors, setErorrs] = useState({});
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [signing, setSigning] = useState(false);

  const [form, setForm] = useState({
    username: username,
    email: email,
    pw: pw,
  });

  //PUT

  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/user/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/user/${id}`, data, false);
      router.push("/");
    } catch (error) {
      setMessage("Failed to update user!");
    }
  };

  //POST

  const postData = async (form) => {
    try {
      const res = await fetch(`/api/creator`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Oops! Failed to Subscribe!");
    }
  };

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeMortalHandler() {
    setModalIsOpen(false);
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //To make sure user info is filled
  const formValidate = () => {
    let err = {};
    if (!form.username) err.username = "Name is required";
    if (!form.email) err.email = "Email is required";
    if (!form.pw) err.pw = "Password is required";
    return err;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErorrs("");
    setMessage("");

    const errs = formValidate();

    if (Object.keys(errs).length === 0) {
      forNewUser ? postData(form) : putData(form);
    } else {
      setErorrs({ errs });
    }
  };

  const [isShowing, setIsShowing] = useState(false);

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
                Sign Up
              </h1>

              <form
                id={formId}
                className="flex flex-col items-center"
                // onSubmit={handleSubmit}
                // action="/api/notes/forms"
                // method="post"
              >
                <div className="bg-white-100 w-80 p-2 flex items-center text-rose-300">
                  <label htmlFor="username" className="text-left mr-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    className="rounded-2xl px-2"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="bg-white-100 w-80 p-2 flex items-center text-rose-300">
                  <label htmlFor="email" className="text-left mr-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    className="rounded-2xl"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="bg-white-100 w-80 p-2 flex items-center text-rose-300">
                  <label htmlFor="pw" className="text-left mr-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="pw"
                    value={form.pw}
                    className="rounded-2xl align-right"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="bg-white-100 w-80 p-2 text-rose-300">
                  <button
                    className="border-2 mt-3 border-rose-300 rounded-full hover:bg-rose-300 hover:text-black px-12 py-2 inline-block font-semibold"
                    type="submit"
                    id="btn"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>

                  <p> {message} </p>
                  <div>
                    {Object.keys(errors).map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </div>

                  {modalIsOpen && (
                    <Modal
                      onSubscribe={closeMortalHandler}
                      onCancel={closeMortalHandler}
                    />
                  )}
                  {modalIsOpen && <Backdrop />}
                </div>
              </form>
            </div>
          </div>

          <div className="w-2/5 bg-rose-400 text-black rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
            <h2 className="mt-3 text-2xl font-bold mb-2">
              Listen to MusX Anywhere!
            </h2>
            <p>Fill up personal information and start journey with us.</p>
            <p mt-3>Already have an account?</p>
            <Link href="/login">
              <a className="border-2 mt-6 border-black rounded-full hover:bg-black hover:text-white px-12 py-2 inline-block font-semibold">
                Log In
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sign;
