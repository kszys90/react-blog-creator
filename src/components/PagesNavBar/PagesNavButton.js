import React from "react";
import StyledPagesNavButton from './PagesNavButton.styled'

const PagesNavButton = props => {
    const style =
        ({ isActive }) => ({
            color: 'black',
            textDecoration: 'inherit',
            fontWeight: isActive ? 700 : 400
        })
    return (
        <StyledPagesNavButton >
        </StyledPagesNavButton>
    )
}

export default PagesNavButton