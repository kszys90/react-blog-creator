import React from "react"
import NavBar from "../components/NavBar"
import data from '../data.json'
import Logo from "../components/Logo"
import NavLink from '../components/NavLink'


export const About = () => {
    const { about } = data
    const linkStyle =
        ({ isActive }) => ({
            paddingTop: '20px',
            fontSize: '20px',
            color: 'black',
            textDecoration: 'inherit',
            fontWeight: isActive ? 700 : 400,
        })

    return (
        <>
            <Logo />
            <NavBar />
            <div style={{ width: '80%', margin: '0 auto 0 auto' }}>
                <h1 style={{ textAlign: "center" }}>{about.title}</h1>
                <div>
                    <div><img src={about.photo} alt="aboutPhoto" style={{ float: 'left', margin: '0 10px 10px 0' }} /></div>
                    <div><p>{about.content}</p></div>
                </div>

                <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <NavLink title={'Back to Home-page'} alias={"home"} style={linkStyle} />
                </div>
            </div>
        </>
    )

}
