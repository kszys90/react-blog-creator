import React from "react";
import StyledNavBar from './NavBar.styled'
import data from '../../data.json'
import NavLink from '../NavLink'

const NavBar = props => {
    const style =
        ({ isActive }) => ({
            fontSize: '32px',
            color: 'black',
            textDecoration: 'inherit',
            fontWeight: isActive ? 700 : 400
        })
    return (
        <StyledNavBar>
            {data.category.map(item => item.title === "intro" ? null : <NavLink key={`nav-bar${item.id}`} title={item.title} alias={item.alias} style={style} />)}
        </StyledNavBar>
    )
}

export default NavBar