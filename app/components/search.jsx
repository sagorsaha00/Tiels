"use client";

import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function SearchHeader() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const anim = useSpring({
    width: open ? "90%" : "120px",
    opacity: 1,
    config: { tension: 200, friction: 20 },
  });

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all" />
      )}

      <div className="relative z-50" ref={ref}>
        <animated.div
          style={anim}
          className="flex items-center overflow-hidden rounded-full border border-[#131313] bg-white"
        >
          {!open ? (
            <button
              onClick={() => setOpen(true)}
              className="w-full px-6 py-2 text-sm transition hover:bg-[#131313] hover:text-[#FFFAF6] cursor-pointer"
            >
              Search
            </button>
          ) : (
            <input
              autoFocus
              type="text"
              placeholder="Search tiles..."
              className="w-full px-5 py-2 text-sm outline-none"
            />
          )}
        </animated.div>
      </div>
    </>
  );
}
