"use client";

import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";
import Header from "./components/header";
import Footer from "./components/Footer";

export default function NotFound() {
  const fadeUp = useSpring({
    from: { opacity: 0, transform: "translateY(40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 180, friction: 12 },
  });

  const scale = useSpring({
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    delay: 200,
  });

  return (
    <>
      <Header></Header>
      <div className="min-h-screen flex items-center justify-center bg-gray-900-400 text-white px-6">
        <div className="text-center">
          <animated.h1
            style={scale}
            className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            404
          </animated.h1>

          <animated.div style={fadeUp}>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
              Page Not Found
            </h2>

            <p className="mt-2 text-gray-400">Your page do not find</p>

            <Link
              href="/"
              className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
            >
              Go Home
            </Link>
          </animated.div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
