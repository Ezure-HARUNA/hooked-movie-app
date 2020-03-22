import React from "react"
import {Link} from 'react-router-dom'
import styled from "styled-components"
import MediaQuery from "react-responsive";
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Button from '@material-ui/core/Button';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import BackspaceRoundedIcon from '@material-ui/icons/BackspaceRounded';
import { useMediaQuery } from "@material-ui/core";



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
   overflow: hidden!important;
`

const DivPc=styled.div`
display: flex!important;
flex-wrap: wrap;
overflow: hidden!important;
`

const StyledStarRoundedIcon=styled(StarRoundedIcon)`
color: yellow;`


const StyledButton = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 20px!important;
    border: 0;
    color: white;
    height:40px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    margin: 10px 5px!important;
    cursor: pointer;

 `

 
const StyledButton2 = styled(Button)`
background: linear-gradient(45deg, blue 30%, #00a81c 90%);
border-radius: 20px!important;
border: 0;
color: white;
height:40px;
padding: 0 30px;
box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
margin: 10px 5px!important;
cursor: pointer;

`



//const DEFAULT_IMG ="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg"
//No Image用の画像

const Detail =(props) => {
    //img→検索結果を表示
    //const poster =
     //props.img === "N/A" ? DEFAULT_IMG : props.img;
    const rating = () => {
        if (props.movies[props.id].vote_average !== 0) {
            return (
                <div>
                    <StyledStarRoundedIcon />
                    {props.movies[props.id].vote_average}
                </div>
            )
        }
    }

    const handleId= (e)=>{
        //e.preventDefault()
        props.setId(props.id)
    }


    const favorites=props.favorites
    const setFavorites=props.setFavorites

    
    const[isAdd, setIsAdd]=React.useState(false)
    const handleIsFavorite =(e)=>{
        e.preventDefault()
        if (isAdd) {
            setIsAdd(false)
            props.movies(e.target.props.movies.value)
            // If no favorites exist, clone the movie and copy into newFavorites.
            const removeFavorites = props.favorites.slice();
            
            //取り出した値の追加
            //let deepClone = JSON.parse(JSON.stringify(props.movies));
            removeFavorites.splice(props.id, 1)
  
            //favoritesの再定義
            props.setFavorites(removeFavorites)
  
          //const newFavorites = favorites.filter(item => item.id !== props.movie.id);
        } else {
            setIsAdd(true)
            //➁追加の処理
            props.movies=e.target.props.movies.value
                 
            // If no favorites exist, clone the movie and copy into newFavorites.
            let newFavorites = favorites.slice();

            //取り出した値の追加
            //let deepClone = JSON.parse(JSON.stringify(props.movies));
            newFavorites.push(props.movies)

            //favoritesの再定義
            setFavorites(newFavorites)
            }

    } 
    
    let isAddState
        if (isAdd) {
           isAddState="削除"
    
        } else {
        　 isAddState="追加"
     
    }

    const isPC=useMediaQuery({
        query: "(min-width: 1025px)"
    })
    return (
        <>
        {isPC && (
　　　　<DivPc>
            <Img 
                src={imgUrl+props.movies[props.id].backdrop_path}
            />
            <div className="childContainer">
                {rating()}
                <h1>{props.movies[props.id].title}</h1> 
                <h2>Overview</h2>
                {/* <h3>ジャンル{props.movies[props.id].genres.name.join(" , ")}</h3> */}
                <p>{props.movies[props.id].overview}</p>
                <h3>Release Date</h3>
                <p>{props.movies[props.id].release_date}</p>
                <h3>上映時間</h3>
                <p>{props.movies[props.id].runtime}</p>

                <StyledButton  onClick={(e)=>{handleIsFavorite(e)}} variant="contained" color="primary" startIcon={<FavoriteRoundedIcon />}> 

                {isAddState}
                </StyledButton> 
                <Link onClick={(e)=>{handleId()}} to='/'>
                <StyledButton2  variant="contained" color="primary" startIcon={<BackspaceRoundedIcon />}>
                    Back To Sarch Screen
                </StyledButton2>
                </Link>

            </div>

        </DivPc>
           
        ) : ( //タブレット・スマホ版
            <Div style={{margin:'auto'}} className="movie"> 
                <Img 
                    //  onClick={handleListSubmit}
                    src={imgUrl+props.movies[props.id].backdrop_path}

                />
                {rating()}

                <h1>{props.movies[props.id].title}</h1> 
                <h2>Overview</h2>
                {/* <h3>ジャンル{props.movies[props.id].genres.name.join(" , ")}</h3> */}
                <p>{props.movies[props.id].overview}</p>
                <h3>Release Date</h3>
                <p>{props.movies[props.id].release_date}</p>
                <h3>上映時間</h3>
                <p>{props.movies[props.id].runtime}</p>
           
                <StyledButton  onClick={(e)=>{handleIsFavorite(e)}} variant="contained" color="primary" startIcon={<FavoriteRoundedIcon />}> 
            
                {isAddState}
                </StyledButton> 
                <Link onClick={(e)=>{handleId()}} to='/'>
                    <StyledButton2  variant="contained" color="primary" startIcon={<BackspaceRoundedIcon />}>
                    Back To Sarch Screen
                    </StyledButton2>
                </Link>

        </Div>

        )}

        </>
       
    )
}

export default Detail
//export default withRouter(connect(mapStateToProps, map)(List))