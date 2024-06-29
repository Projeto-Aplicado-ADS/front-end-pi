import React from "react";
import LoginScreen from "./Components/LoginScreen";
import { Toaster } from "@/components/ui/toaster";
import Cookies from "js-cookie";

export const metadata = {
  title: "login",
};

function Page() {
  const token = Cookies.get("token");

  if (token) window.location.assign("/");

  return (
    <>
      <LoginScreen />
      <Toaster />
    </>
  );
}

export default Page;
