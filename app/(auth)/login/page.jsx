"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { signIn, authClient } from "../../utils/auth-client";
import Image from "next/image";

export const signInGoogle = async () => {
  console.log("google calling");
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log("Data", data);
};
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await signIn.email(
      {
        email,
        password,
        callbackURL: "/",
      },
      {
        onRequest: () => {
          console.log("Loading...");
        },
        onSuccess: () => {
          console.log("Login success");
        },
        onError: (ctx) => {
          toast.error("please try again something wrong");
          alert(ctx.error.message);
          console.log(error);
        },
      },
    );
  };

  return (
    <main className="flex items-center justify-center bg-[#FFFAF6] px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl text-center font-semibold text-[#131313]">
          Welcome
        </h1>

        <p className="mt-2 text-sm text-center text-gray-500">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border px-5 py-3 outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full border px-5 py-3 outline-none focus:border-black"
          />

          <button className="w-full cursor-pointer rounded-full bg-[#131313] py-3 text-white hover:bg-[#333] transition">
            Login
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          onClick={() => signInGoogle()}
          className="flex w-full items-center justify-center gap-3 rounded-full border py-3 text-sm font-medium hover:bg-gray-100 transition"
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

        <p className="mt-6 text-center text-sm cursor-pointer text-gray-500">
          Don’t have an account?{" "}
          <Link href="/register" className="text-black font-medium">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
