import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
  padding: 20px;
  font-size: 0.8rem;
  background-color: ${props => props.theme.colors.footer};
  color: white;
  `

function Footer() {
    return <StyledFooter>Footer Content</StyledFooter>
}

export default Footer