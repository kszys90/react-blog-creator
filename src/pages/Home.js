import React from "react"
import NavBar from "../components/NavBar"
import Logo from "../components/Logo"
import { Outlet } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <Logo />
            <NavBar />
            <Outlet />
        </>
    )

}
