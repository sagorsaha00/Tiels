"use client";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSession } from "../../../utils/auth-client";
import Header from "../../../components/header";
import Footer from "../../../components/Footer";
import Tiles from "../../../components/tiles";
export default function Layout({ children }) {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session) {
    toast("Please Login First!");
    return router.push("/login");
  }
  return (
    <>
      <Header />
      {children}
      <Tiles />
      <Footer />
    </>
  );
}
