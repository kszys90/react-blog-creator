import React from "react";
import StyledPagesNavSeparator from './PagesNavSeparator.styled'

const PagesNavSeparator = props => {
    const style =
        ({ isActive }) => ({
            color: 'black',
            textDecoration: 'inherit',
            fontWeight: isActive ? 700 : 400
        })
    return (
        <StyledPagesNavSeparator >
            {props.text}
        </StyledPagesNavSeparator>
    )
}

export default PagesNavSeparator