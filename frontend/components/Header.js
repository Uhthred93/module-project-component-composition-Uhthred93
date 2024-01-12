import React from "react";
import styled from 'styled-components'

const StyledHeader = styled.header`
color: ${props => props.theme.colors.accent};
font-size: 2rem;
text-align: center;
padding: 20px;
`;

function Header() {
    return <StyledHeader>NASA APOD Viewer</StyledHeader>
}

export default Header