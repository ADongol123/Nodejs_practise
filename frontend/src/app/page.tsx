// import { ToastProvider } from 'react-toast-notifications';
"use client";
import React from "react"
import LoginPage from "./pages/login/page"
import HomePage from "./pages/homepage/page";
export default function Home() {
  const [storageName, setStorageName] = React.useState<any>('')
  const name = localStorage.getItem("name")

  return (
    <>
      {!name ? <LoginPage /> : <HomePage />}
    </>
    // <Login />
  )
}
