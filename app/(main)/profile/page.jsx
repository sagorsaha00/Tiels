"use client";

import Image from "next/image";

import { useSession } from "../../utils/auth-client";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { data: session } = useSession();
  console.log("session", session);
  const router = useRouter();
  if (!session?.user) return null;
  let img = session?.user.image;

  if (session.user.image == null || session.user.image == "") {
    img = "/oggy.png";
  }

  const name = session?.user.name;

  const email = session?.user.email;

  return (
    <div className="flex items-center justify-center bg-[#FFFAF6]">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
        <div className="flex justify-center">
          <Image
            width={300}
            height={300}
            src={img}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>

        <h2 className="mt-4 text-xl font-semibold text-gray-800">{name}</h2>
        <h3 className="text gray-800">{email}</h3>

        <button
          onClick={() => router.push("/update-profile")}
          className="mt-4 w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
