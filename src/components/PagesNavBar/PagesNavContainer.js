import React from "react";
import StyledPagesNavContainer from './PagesNavContainer.styled'


const PagesNavContainer = props => {

    return (
        <StyledPagesNavContainer>
            {props.children}
        </StyledPagesNavContainer>
    )
}

export default PagesNavContainer