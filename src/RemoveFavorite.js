import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.88);
  color: red;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: none;
`;

const RemoveFavorite = (props) =>{

    const handleRemoveFavorite= (e) =>{

        e.preventDefault()
        const item =e.target.value

          // If no favorites exist, clone the movie and copy into newFavorites.
        const removeFavorites = props.favorites.slice();
          
          //取り出した値の追加
          //let deepClone = JSON.parse(JSON.stringify(props.movies));
          removeFavorites.splice()

          //favoritesの再定義
          props.setFavorites(removeFavorites)

        //   const newFavorites = favorites.filter(item => item.id !== props.movie.id);

    }   
    return (
        <StyledButton onClick={(e)=>{handleRemoveFavorite(e)}}>
        </StyledButton>
    )
}
export default RemoveFavorite