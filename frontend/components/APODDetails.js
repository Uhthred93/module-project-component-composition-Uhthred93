import React from 'react'

function APODDetails({ apodData }) {
    if (!apodData) return <h3>Loading...</h3>

    return (
        <div>
            <h2>{apodData.title}</h2>
            <p>{apodData.explanation}</p>
        </div>
    )
}

export default APODDetails