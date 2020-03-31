import React from "react"

const GenreList =(props) =>{
    let filter =props.genreArray[props.id].filter((name) => {
        return props.genreArray[props.id].includes(props.movies[props.id].genre_ids) 
    })

    return (
        <div>
            <p>{filter}</p>
        </div>
    )
}

export default GenreList