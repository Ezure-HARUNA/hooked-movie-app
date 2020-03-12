//➀インポート
import React from "react"
import Header from "./Header";
import Search from "./Search"
import List from "./List";
import Test from "./Test"
//import PageControll from "./PageContoroll";

  //styled-componentsをインポート
  //import styled from "styled-components"

　//APIの導入
　const MOVIE_API_URL = "https://api.themoviedb.org/3/movie/550?api_key=62df1d74f3375f28b7946846b540b1b9";
　//const IMG="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg"
  //TMDBのAPIに後で置き換える

//➁コンポーネント



const App =() => {
    const[roading, setRoading] =React.useState(true)
    switch(roading) {
      case "SERCH_SUBMIT":
          setRoading(...roading)
          break;
      case "SEARCH_SUCCESS":
         setRoading(...roading)
         break;
      case "SEARCH_FAILURE":
        setRoading(...roading)
        break;
       
     

        }
      
        const handleTest =()=>{
          fetch("https://api.themoviedb.org/3/movie/550?api_key=62df1d74f3375f28b7946846b540b1b9"
            //getの時はURLだけ入れるだけでもいい
          )
          .catch(err=> {
            if (err) console.error(err)
          })
          .then(res=>res.json())
          .then(res=>{
            console.log(JSON.stringify(res))
          })
        }
        
      /*
          const search= searchValue =>{
            fetch(MOVIE_API_URL, {
              type:"SEARCH_SUCCESS",
              payload:jsonResponse.Search
            }
          )
          .catch(err=> {
            if (err) console.error(err)
          })
          .then(res=>res.json())
          .then(res=>{
            console.log(res.type)
            console.log(res.payload)
          })
            
         }
         */

        const search = () =>{
          fetch("https://api.themoviedb.org/3/search/movie")
        .catch(err=> {
          if (err) console.error(err)
        })
        .then(res=>res.json())
        .then(res=>{
          if (res==="True"){[
            {type: "SEARCH_SUCCESS"},
            {payload: jsonResponse.Search}
          
          ]}
          else {[
            {type: "SEARCH_FAILURE"},
            {payload: jsonResponse.Error}
          
          ]}
          }
        }

         

  


    //const[movies, setMovies] =React.useState([])

    //const[errorMessage, setErrorMessage] =React.useState(null)
  //const[state名, stateの再定義関数名] =React.useState(stateの初期値)
  //データの定義

  
  //映画のデータを入れる
  //APIの導入
  
  
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
      <Search search={search}></Search>
      <List><img src="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg"></img></List>
      <button onClick={handleTest}>テスト</button>
      <img src="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg"></img>
      <img src="https://image.tmdb.org/t/p/w185/s1Es2mVEECJHM5x1m8Tj6WsibAP.jpg"></img>
      <div className="movies"></div>
    </div>
    
  )
}

 


//➃エクスポート
export default App

