//➀インポート
import React, {useEffect} from "react"
import Search from "./Search"
import FavoriteList from "./FavoriteList";
import PageContoroll from "./PageContoroll";
import CircularProgress from '@material-ui/core/CircularProgress';

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
const Ul =styled.ul`
display:flex;
flex-wrap: wrap;
`


const Favorite =(props) => {
     //
    const movies =props.movies
    const setMovies=props.setMovies
    const [loading, setLoading] = React.useState(true)
    //const [movies, setMovies] = React.useState([])
    const [errorMessage, setErrorMessage] = React.useState(null)
    //const [details, setDetails] =React.useState([])

    
//     useEffect(() => {
//       fetch(MOVIE_POPULAR_URL)
//           .then(res => res.json())
//           .then(res => { //responseでも可能(任意) json→連想配列
//               setMovies(res)
//               setLoading(false)
            
//           });
         
//   }, []);
  

  
          //map関数の引数をreturnしてあげる必要がある
              //配列  　　　//配列 //配列(movies)に用意されたメソッド(あらかじめ用意された関数)　//movie=連想配列(要素)
              //メソッドは作ることもできる
              const favoritecards=props.favorites.map((favorite, id) =>{
                return (
                <FavoriteList setId={props.setId} id={id} favorite={favorite} favorites={props.favorites}/>
                )
                })
    
              /*
              const moviecards= [<List key={`${id}-{res[0].title}`} movie={movie} />
                                 , <List key={`${id}-{res[1].title}`} movie={movie} />
                                 ,<List key={`${id}-{res[2].title}`} movie={movie} />
                                ・・・・・・]
                */

    //配列・連想配列・変数・関数→別々の呼び出し方
  

    //検索の分岐別の処理
    //useEffect
    const search = searchValue => {
      //検索中
      setLoading(true)
      setErrorMessage(null)

      // fetch(`https://api.themoviedb.org/3/search/person?api_key=62df1d74f3375f28b7946846b540b1b9&language=en-US&query=${searchValue}&page=1&include_adult=false`)
     //fetch( `https://api.themoviedb.org/3/search/movie?api_key=62df1d74f3375f28b7946846b540b1b9&language=en-US&query=${searchValue}&page=1&include_adult=false`)
     fetch( `https://api.themoviedb.org/3/movie/${props.movies[props.id].id}?api_key=62df1d74f3375f28b7946846b540b1b9&&language=en-US&append_to_response=videos,images&include_image_language=en,null`)

          
        .then(res => res.json())
        .then(res => { //検索成功
            if (res != null) {
              setLoading(false)
              setMovies(res)
            } else { //検索失敗
              setErrorMessage(true)
              setLoading(false)
            }
        })
    }
    

     
        

  return (
    
    <Div>
       
     
      <Search search={search}></Search>
      {/* <img src="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg" alt=""/> */}
      {/* 分岐ごとの表示 */}
      <div className="moviesList">
        
        {loading && !errorMessage ? ( //loading=true/errorMessage=falseの場合
          // <span>loading...</span>
          <CircularProgress color="secondary" />
        ): errorMessage ? (
          <h3 className="errorMessage">検索結果 なし</h3>
        ): (
          <Ul>
            {favoritecards}
          </Ul>
        )} 
      </div>
        <PageContoroll></PageContoroll> 
    </Div>
    
  )
}

 


//➃エクスポート
export default Favorite
//export default process.env.NODE_ENV === "development" ? hot(App) : App;



