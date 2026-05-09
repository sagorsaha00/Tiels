"use client";
import { useSpring, animated } from "@react-spring/web";
import { useSession, authClient } from "../utils/auth-client";
import { useRouter } from "next/navigation";

export default function Header() {
  const headerAnim = useSpring({
    from: { y: -40, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 200,
  });
  const router = useRouter();
  const { data: session } = useSession();

 
  const handleLoginfunc = async () => {
    if (session?.user) {
      await authClient.signOut();
      router.push("/login");
      router.refresh();
    } else {
      router.push("/login");
    }
  };

  const handleTielsClik = () => {
    window.location.href = "/#catalog";
  };

  return (
    <animated.header
      style={headerAnim}
      className="flex  bg-[#FFFAF6] items-center justify-between px-6 py-6 md:px-12"
    >
      <div
        onClick={() => router.push("/")}
        className="text-2xl cursor-pointer font-bold tracking-[-1px]"
      >
        TILES
      </div>

      <div className="flex gap-1.5">
        <nav>
          <a
            onClick={handleTielsClik}
            href="#catalog"
            className="text-base font-medium"
          >
            All Tiles
          </a>
        </nav>
        <button
          onClick={() => router.push("/profile")}
          className="cursor-pointer hover:bg-gray-300  rounded"
        >
          Profile
        </button>
        <button
          onClick={() => handleLoginfunc()}
          className="cursor-pointer hover:bg-gray-300  rounde"
        >
          {session ? "Logout" : "Login"}
        </button>
      </div>
    </animated.header>
  );
}
