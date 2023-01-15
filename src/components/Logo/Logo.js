import React from "react";
import StyledLogo from './Logo.styled'

const Logo = props => {

    return (
        <StyledLogo style={{ textAlign: "center" }}>
            <img
                src="https://i.picsum.photos/id/375/200/200.jpg?grayscale&hmac=_J7UQ-sDBoImbsYdJt6M5m4aHiCsg6bA3UQqlQci8-c"
                alt="logo"
                style={{ borderRadius: '50%', margin: "0 auto 0 auto" }}
            />
            <h1 style={{ fontSize: "50px", fontWeight: "900", marginBlockEnd: 0, marginBlockStart: 0, padding: "20px" }}>John Smith Journal</h1>
        </StyledLogo >
    )
}

export default Logo