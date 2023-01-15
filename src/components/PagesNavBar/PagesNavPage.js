import React from "react";
import StyledPagesNavPage from './PagesNavPage.styled'

const PagesNavPage = props => {
    const style =
        ({ isActive }) => ({
            color: 'black',
            textDecoration: 'inherit',
            fontWeight: isActive ? 700 : 400
        })
    return (
        <StyledPagesNavPage >
        </StyledPagesNavPage>
    )
}

export default PagesNavPage