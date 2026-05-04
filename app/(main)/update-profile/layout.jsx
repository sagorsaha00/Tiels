"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import Header from "../../components/header";
import Footer from "../../components/Footer";
// import { useSession } from "../../utils/auth-client";
// import toast from "react-hot-toast";
export default function Layout({ children }) {
  // const router = useRouter();
  // const { data: session } = useSession();
  // if (!session) {
  //   return router.push("/login");
  //   toast("Please Login First!");
  // }
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
