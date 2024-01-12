import React from 'react'
import styled from 'styled-components'

const StyledMainContent = styled.div`
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
  height: 100vh;

  img, iframe {
    max-width: 90%;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  `;

function MainContent({ apodData }) {
    if (!apodData) return <h3>Loading...</h3>

    return (
        <StyledMainContent>
            {apodData.media_type === 'image' ? (
                <img src={apodData.url} alt={apodData.title} />
            ) : (
                <iframe title={apodData.title} src={apodData.url} frameBorder="0" />
            )}
        </StyledMainContent>
    )
}

export default MainContent