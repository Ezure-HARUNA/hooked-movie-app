import React, {useEffect} from "react"
import Search from "./Search"
import PageContoroll from "./PageContoroll";
import FavoriteList from "./FavoriteList"
import AddFavorite from "./AddFavorite"
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

  //styled-componentsをインポート
  import styled from "styled-components"

　//APIの導入
　const MOVIE_POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?api_key=62df1d74f3375f28b7946846b540b1b9&amp;language=ja-JA&amp;page=1";
  //const MOVIE_UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=62df1d74f3375f28b7946846b540b1b9&amp;language=ja-JA&amp;page=1";
  
//➁コンポーネント

const Div = styled.div `
min-height:100vh;
width:100vw;
background-color: #282A3A;
z-index: 1!important;
color:white!important;
.errorMessage {
  margin: 0 auto;
  font-weight:bold;
  color: red;
}
.moviesList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
`
const RemoveModeButton =styled(Button)`
background: linear-gradient(45deg, blue 30%, #00a81c 90%);
    border-radius: 20px!important;
    border: 0;
    color: white;
    height:40px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    margin-top:-15px;
    cursor: pointer;`


const Favorite = () => {
    const [toggleRemove, setToggleRemove] = React.useState(false)
    const [favorites, setFavorites] = React.useState([])
  
    return (
      <>
        
        {favorites.length > 0 ? (
          <>
            <text>お気に入りだよ</text>
              <RemoveModeButton variant="contained" onClick={() => setToggleRemove(!toggleRemove)}>
                {toggleRemove ? "Disable Remove Mode" : "Enable Remove Mode"}
              </RemoveModeButton>
    
  
            <div className="favoritesList">
              {favorites.map((movie,id) => (
                <FavoriteList
                  id={id}
                  movie={movie}
                  removeMode={toggleRemove}
                />
              ))}
            </div>
          </>
        ) : (
          <text>
            お気に入りを追加してね
          </text>
        )}
        　　<AddFavorite></AddFavorite>
           <PageContoroll></PageContoroll>
      </>
    );
  };


//➃エクスポート
export default Favorite
//export default process.env.NODE_ENV === "development" ? hot(App) : App;