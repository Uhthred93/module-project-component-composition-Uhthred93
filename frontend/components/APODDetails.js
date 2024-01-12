import React from 'react'
import styled from 'styled-components'

const StyledAPODDetails = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.text};

  h2 {
    color: ${props => props.theme.colors.primary}; // Vivid Blue for the title 
  }

  p {
    color: ${props => props.theme.colors.lightText}; // Lighter grey for the explanation
  }
`;

function APODDetails({ apodData }) {
    if (!apodData) return <h3>Loading...</h3>

    return (
        <StyledAPODDetails>
            <h2>{apodData.title}</h2>
            <p>{apodData.explanation}</p>
        </StyledAPODDetails>
    );
}

export default APODDetails