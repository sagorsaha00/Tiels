"use client";

import Image from "next/image";
import { useSession, authClient } from "../../utils/auth-client";
import { useState, useEffect } from "react";

export default function ProfileSection() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
    
  useEffect(() => {
    const updateProfile = async () => {
      if (session?.user) {
        setName(session.user.name);
        setImage(session.user.image);
      }
    };

    updateProfile();
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await authClient.updateUser({
      name,
      image,
    });

    alert("Profile updated ✅");
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please login first</p>
      </div>
    );
  }

  return (
    <section className=" bg-[#FFFAF6] px-4 py-10 text-[#131313]">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-black/40">
            Profile
          </p>
          <h1 className="text-[42px] font-semibold md:text-[64px]">
            Your Account
          </h1>
        </div>

        <div className="grid gap-8 rounded-[32px] bg-white p-6 shadow-xl md:grid-cols-[260px_1fr] md:p-8">
          <div className="flex flex-col items-center justify-center rounded-[24px] bg-[#131313] p-6 text-white">
            <div className="h-32 w-32 overflow-hidden rounded-full border border-white/20">
              <Image
                width={300}
                height={300}
                src={image || "/oggy.png"}
                alt="profile"
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="mt-6 text-xl font-semibold">{name}</h2>
            <p className="mt-2 text-sm text-white/50">{session.user.email}</p>
          </div>

          
          <form onSubmit={handleUpdate} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-black/50">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 w-full rounded-full border px-5 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-black/50">
                Profile Image URL
              </label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="h-12 w-full rounded-full border px-5 outline-none focus:border-black"
              />
            </div>

            <button className="mt-4 w-full rounded-full bg-[#131313] py-3 text-white transition hover:bg-[#333] md:w-auto md:px-10">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
