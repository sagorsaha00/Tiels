"use client";

import Link from "next/link";
import { useState } from "react";
import { signUp } from "../../utils/auth-client";
import signInGoogle from "../login/page";
import Image from "next/image";
import toast from "react-hot-toast";
export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    await signUp.email(
      {
        name,
        email,
        password,
        image,
        callbackURL: "/",
      },
      {
        onRequest: () => {
          toast.success("Account try to create");
        },
        onSuccess: () => {
          toast.success(" Account created");
        },
        onError: (ctx) => {
          toast.error(`something worng ${ctx.error.message} `);
        },
      },
    );
  };

  return (
    <main className=" flex items-center justify-center bg-[#FFFAF6] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-[#131313]">
          Create Your account
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Join and start your journey
        </p>

        <form onSubmit={handleRegister} className="mt-6 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-full border px-5 py-3 outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border px-5 py-3 outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Password (min 8 char)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full border px-5 py-3 outline-none focus:border-black"
          />

          <input
            type="text"
            placeholder="Photo URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full rounded-full border px-5 py-3 outline-none focus:border-black"
          />

          <button className="w-full cursor-pointer rounded-full bg-[#131313] py-3 text-white hover:bg-[#333] transition">
            Register
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          onClick={() => signInGoogle()}
          className="flex cursor-pointer w-full items-center justify-center gap-3 rounded-full border py-3 text-sm font-medium hover:bg-gray-100 transition"
        >
          <Image
            height={300}
            width={300}
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="h-5 w-5"
            alt="google"
          />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-black font-medium">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
