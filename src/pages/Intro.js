import React from "react"
import Logo from "../components/Logo"
import NavLink from '../components/NavLink'

export const Intro = () => {
    const itemsContainerStyle = {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '700px',
        textAlign: 'center',
    }

    const linkStyle =
        ({ isActive }) => ({
            paddingTop: '20px',
            fontSize: '32px',
            color: 'black',
            textDecoration: 'inherit',
            fontWeight: isActive ? 700 : 400,
        })

    return (
        <div style={itemsContainerStyle}>
            <Logo />
            {/* <p style={{ color: "red" }}><span style={{ fontWeight: 700 }}>WARNING!</span> <br />
                To unlock app functions run dev-server.<br />
                (type "" in Your code editor console)
            </p> */}
            <NavLink key={'intro-1'} title={'Click to enter!'} alias={"home/1"} style={linkStyle} />
        </div >
    )

}
