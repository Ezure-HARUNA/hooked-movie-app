import React from "react"
//import Detail from "./Detail"
//import { withRouter } from 'react-router';
import styled from "styled-components"

import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Button from '@material-ui/core/Button';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';


const imgUrl = "https://image.tmdb.org/t/p/w1280/";

const Img =styled.img`
width:100%;
height:100%;
`

const Div=styled.div`
   /* position: relative; */
   min-height:100vh;
   width:100vw;
   background-color: #282A3A;
   margin-top: 10px!important;
   color: white;
`




const StyledStarRoundedIcon=styled(StarRoundedIcon)`
color: yellow;`


const StyledButton = styled(Button)`
    background: linear-gradient(45deg, blue 30%, #00a81c 90%);
    border-radius: 20px!important;
    border: 0;
    color: white;
    height:40px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    margin-top:-15px;
    cursor: pointer;
 `



//const DEFAULT_IMG ="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg"
//No Image用の画像

const Detail =(props) => {
    //img→検索結果を表示
    //const poster =
     //props.img === "N/A" ? DEFAULT_IMG : props.img;
     const rating = () => {
        if (props.movies[0].vote_average !== 0) {
          return (
            <div>
              <StyledStarRoundedIcon />
              {props.movies[0].vote_average}
            </div>
          )
        }
      }

    /*
      const[isFavorite, setIsFavorite]=React.useState(false)

      const handleFavorite =() =>{
        if (isFavorite) {
            setIsFavorite(false)
        } else {
            setIsFavorite(true)
        }
   
        const isFavoriteState =() =>{
            if (isFavorite) {
                return (
                    <Button onClick={handleFavorite} variant="contained" color="primary" startIcon={<FavoriteRoundedIcon />}>
                       削除
                    </Button>       
                )
            } else {
                return (
                    <Button onClick={handleFavorite} variant="contained" color="primary" startIcon={<FavoriteRoundedIcon />}>
                    　　追加
                 　　</Button>     
                )
            }
      
        }
        
       
      }
      
     
      

      const handleListSubmit=() =>{
          this.props.history.push('/detail')
      }
     */
  
    return (
       //中央ぞろえ
       <Div style={{margin:'auto'}} className="movie"> 
            <Img 
                //  onClick={handleListSubmit}
                 src={imgUrl+props.movies[props.id].backdrop_path}

              //Detailsにリンク飛ぶように
              />
              {rating()}

            <h1>{props.movies[props.id].title}</h1> 
            <h2>Overview</h2>
            <p>{props.movies[props.id].overview}</p>
         
            <StyledButton  variant="contained" color="primary" startIcon={<FavoriteRoundedIcon />}>
                Add Favorite
            </StyledButton>
            
            {/* onClick={handleFavorite} */}
            {/* {isFavoriteState()} */}

        </Div>
    )
}

export default Detail
//export default withRouter(connect(mapStateToProps, map)(List))