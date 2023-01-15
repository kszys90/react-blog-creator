import React from 'react'
import PropTypes from 'prop-types'

import { NavLink as RouterNavLink } from 'react-router-dom'

export const NavLink = (props) => {
    function handleClick(e) {
        if (!props.alias) { return e.preventDefault() }
    }

    return (

        <RouterNavLink
            onClick={handleClick}
            to={`/${props.alias}`}
            style={props.style}
        >
            {props.title}
        </RouterNavLink>

    )
}

NavLink.propTypes = {
    title: PropTypes.string,
    alias: PropTypes.string
}

export default NavLink