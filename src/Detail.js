import React from "react"
import GenreList from "./GenreList"
import {Link} from 'react-router-dom'
import styled from "styled-components"
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Button from '@material-ui/core/Button';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import BackspaceRoundedIcon from '@material-ui/icons/BackspaceRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import NO_IMG from "./img/noImage.png"


const Img =styled.img`
/* width: 470px!important; */
/* height: 720px!important; */
background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.05) 35%,
      rgba(44, 57, 73, 0.8) 55%,
      rgba(44, 57, 73, 1) 70%
    )!important;
`
const Img2=styled.img`
    width: 100%;
    height: 100%;
`

const Div=styled.div`
   /* position: relative; */
   min-height:100vh;
   /* width:100vw; */
   background-color: #282A3A;
   margin-top: 10px!important;
   color: white;
   overflow: hidden!important;
   display: flex;
   
`
const Div2=styled.div`
    padding: 0 3%!important;
    margin-top: 100px!important;
`
const Div3=styled.div`
    padding: 0 3%;`

const DivSP=styled.div`
display: flex!important;
flex-wrap: wrap!important;
color: white;
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

 
    
    const imgUrl = "https://image.tmdb.org/t/p/w1280/";
    const imgUrlPc = "https://image.tmdb.org/t/p/w500/";
    const detailImgUrl = "https://image.tmdb.org/t/p/w1280/";
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


    const[isAdd, setIsAdd]=React.useState(false)
    const handleIsFavorite =(e)=>{
        e.preventDefault()


        if (isAdd) {
            setIsAdd(false)
            // props.movies(e.target.props.movies.value)
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
            // props.movies=e.target.props.movies.value
                 
            // If no favorites exist, clone the movie and copy into newFavorites.
            let newFavorites = props.favorites.slice();
            let moviesClone = JSON.parse(JSON.stringify(props.movies[props.id]));

            //取り出した値の追加
            //let deepClone = JSON.parse(JSON.stringify(props.movies));
            newFavorites.push(moviesClone)

            //favoritesの再定義
            props.setFavorites(newFavorites)
            }

            console.log(props.favorites)
            console.log(props.setFavorites)

    } 
    
    let isAddState
        if (isAdd) {
           isAddState="削除"
    
        } else {
        　 isAddState="追加"
     
    }
    

    const theme = useTheme();
    const isPC=useMediaQuery(theme.breakpoints.up('sm'));

    let poster =
    props.movies[props.id].backdrop_path === null ? NO_IMG :  imgUrl+ props.movies[props.id].backdrop_path

    let posterPc =
    props.movies[props.id].poster_path === null ? NO_IMG :  imgUrlPc+ props.movies[props.id].poster_path


    let str=props.movies[props.id].release_date;
    let releaseDate=str.split('-').join('/');

//ジャンルの処理

    // let genreState 
    // const [genreArray, setGenreArray] =React.useState([])
    
    
    //  const genreIds=props.movies[props.id].genre_ids.join(", ")
    // // let genreArray =genreNames.map(genreState=>genreState)

    // const [genreArray, setGenreArray] =React.useState([])
    // let newGenre=props.movies[props.id].genre_ids.slice()
    // // const genreNames=genreArray.map(item=>item.genreState)
    // if (genreIds.match(/=28/)) {
    //     newGenre.push("Action")
    //     } else if (genreIds.match(/=12/)) {
    //         newGenre.push("Adventure")
    //     } else if (genreIds.match(/=16/)) {
    //         newGenre.push("Animation")
    //     } else if (genreIds.match(/=35/)) {
    //         newGenre.push("Comedy")
    //     } else if (genreIds.match(/=80/)) {
    //         newGenre.push("Crime")
    //     } else if (genreIds.match(/=99/)) {
    //         newGenre.push("Documentary")
    //     } else if (genreIds.match(/=18/)) {
    //         newGenre.push("Drama")
    //     } else if (genreIds.match(/=10751/)) {
    //         newGenre.push("Family")
    //     } else if (genreIds.match(/=14/)) {
    //         newGenre.push("Fantasy")
    //     } else if (genreIds.match(/=36/)) {
    //         newGenre.push("History")
    //     } else if (genreIds.match(/=27/)) {
    //         newGenre.push("Horror")
    //     } else if (genreIds.match(/=10402/)) {
    //         newGenre.push("History")
    //     } else if (genreIds.match(/=9648/)) {
    //         newGenre.push("Mistery")
    //     } else if (genreIds.match(/=10749/)) {
    //         newGenre.push("Romance")
    //     } else if (genreIds.match(/=878/)) {
    //        newGenre.push("Science Fiction")
    //     } else if (genreIds.match(/=53/)) {
    //         newGenre.push("Thriller")
    //     } else if (genreIds.match(/=10752/)) {
    //         newGenre.push("War")
    //     } else if (genreIds.match(/=37/)) {
    //         newGenre.push("Westwern")
    //     } else {
    //         newGenre.push("No genre")
    //     }
    //     setGenreArray(newGenre)
    
    

    // const { urlKey } = props;
    // const url = `https://www.youtube.com/watch?v=${urlKey}`;

    // let genreArray=props.details.map(item => item.name);
    let genreArray=props.details.map((name, id )=>{
        return (
            <GenreList id={id} name={name} details={props.details}></GenreList>
        )

    }) 

    


    //   let genresArray = props.details.genres.map(item => item.name);
    //   const genresArray= props.detailsfilter(genreRes => props.movies[props.id].genre_ids.includes(genreRes.id))



    
    return (
    <>
        {isPC ? (
        <Div style={{margin:'auto'}} className="movie"> 
            <Img 
                src={posterPc}
            />
         
            <Div2>
                <h1>{props.movies[props.id].title}</h1> 
                {rating()}
                <h2>Overview</h2>
                {/* <h3>ジャンル{filter}</h3> */}
                <p>{props.movies[props.id].overview}</p>
                <h3>Release Date</h3>
                <p>{releaseDate}</p>
                <h3>上映時間</h3>
                {/* <p>{props.details.runtime}分</p> */}

                <StyledButton  onClick={(e)=>{handleIsFavorite(e)}} variant="contained" color="primary" startIcon={<FavoriteRoundedIcon />}> 
                    {isAddState}
                </StyledButton> 
                <Link onClick={(e)=>{handleId()}} to='/'>
                <StyledButton2  variant="contained" color="primary" startIcon={<BackspaceRoundedIcon />}>
                    Back To Sarch Screen
                </StyledButton2>
                </Link>
                {/* <PlayButton onClick={() => window.open(url, "_blank")}>
                    <PlayIcon />
                    Watch Trailer
                </PlayButton> */}
            </Div2>
        </Div>       
　　　　
           
        ) : ( //PC版
            <DivSP>
                 <Img2 
                    src={poster}
                />
              
                <Div3 className="childContainer">
                    <h1>{props.movies[props.id].title}</h1> 
                    {rating()}
                    <h2>Overview</h2>
                    {/* <h3>ジャンル{filter}</h3> */}
                    <GenreList movies={props.movies} id={props.id} genreArray={genreArray} ></GenreList>
                    <p>{genreArray}</p>
                    <p>{props.movies[props.id].overview}</p>
                    <h3>Release Date</h3>
                    <p>{releaseDate}</p>
                    <h3>上映時間</h3>
                    {/* <p>{props.details.runtime}分</p> */}

                    <StyledButton  onClick={(e)=>{handleIsFavorite(e)}} variant="contained" color="primary" startIcon={<FavoriteRoundedIcon />}> 
                        {isAddState}
                    </StyledButton> 
                    <Link onClick={(e)=>{handleId()}} to='/'>
                    <StyledButton2  variant="contained" color="primary" startIcon={<BackspaceRoundedIcon />}>
                        Back To Sarch Screen
                    </StyledButton2>
                    </Link>
                    {/* <PlayButton onClick={() => window.open(url, "_blank")}>
                        <PlayIcon />
                        Watch Trailer
                    </PlayButton> */}
                </Div3>
            </DivSP>

        )}
    </>
    )

}



export default Detail
//export default withRouter(connect(mapStateToProps, map)(List))