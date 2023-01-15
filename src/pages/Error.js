import React from "react"
import NavLink from '../components/NavLink'

export const Error = () => {
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
            <div style={{ width: '80%', margin: '0 auto 0 auto' }}>
                <h1 style={{ textAlign: "center" }}>ERROR 404!</h1>
                <div>
                    <div><h3 style={{ textAlign: "center" }}>Page not found</h3></div>
                </div>

                <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <NavLink title={'Back to Home-page'} alias={"home"} style={linkStyle} />
                </div>
            </div>
        </>
    )

}
