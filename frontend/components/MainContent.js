import React from 'react'

function MainContent({ apodData }) {
    if (!apodData) return <h3>Loading...</h3>

    return (
        <div>
            {apodData.media_type === 'image' ? (
                <img src={apodData.url} alt={apodData.title} />
            ) : (
                <iframe title={apodData.title} src={apodData.url} frameBorder="0" />
            )}
        </div>
    )
}

export default MainContent