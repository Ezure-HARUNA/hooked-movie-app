//➀インポート
import React from "react"
import Header from "./Header";
import Search from "./Search"
import List from "./List";
import Test from "./Test"
import PageControll from "./PageContoroll";

  //styled-componentsをインポート
  //import styled from "styled-components"

　//APIの導入
　//const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
  //TMDBのAPIに後で置き換える

//➁コンポーネント

const App =() => {

  //const[state名, stateの再定義関数名] =React.useState(stateの初期値)
  //データの定義
  
  //映画のデータを入れる
  /*
  const [movieData, setmovieData] =React.useState(　
    //setmovieData→取得できたデータを入れる
      //データを分ける
      [
        {
        title: "apple",
        img:"",
        desc:"aa"}
      ]
   )

   const Lists = movieData.map((movie, id) =>{ //変更したいデータがmovieData
      return (                                 //movie(第一引数)要素が入る
        <li>
            <img src={movie.img} /> 
            <h1>{movie.title}</h1>
            <p>{movie.desc}</p>　　　　　　　　　
        </li>
      )
   })
  


  const movieDataState =() =>{


     
  }
*/

  return (
    
    <div>
      <Header> <Test></Test></Header>
      <Search></Search>
      <List><img src="../img/movieImg.jpg" /></List>
      
    </div>
    
  )
}
 


//➃エクスポート
export default App

