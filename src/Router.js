import React from "react"
import {BrowserRouter , Route} from "react-router-dom";
import App from "./App"
import Header from "./Header"
import Detail from "./Detail"
import List from "./List"
import FavoriteList from "./FavoriteList"
import UpComing from "./UpComing"
import Favorite from "./Favorite"
import FavoriteDetail from "./FavoriteDetail"

import styled from "styled-components"
import PageContoroll from "./PageContoroll";

const Div=styled.div`
   background-color: #282A3A;
`

const Router =() =>{
    const [movies, setMovies] = React.useState([])
    const [details, setDetails] =React.useState([])
    const [favorites, setFavorites] =React.useState([]);
    const [pages, setPages]=React.useState(1)
    const [id, setId] =React.useState("")
    let newFavorites ;

    


   const favoritecards=favorites.map((favorite, id) =>{
      return (
         <FavoriteList setId={setId} id={id} favorite={favorite} favorites={favorites}/>
      )
   })

   

    return (
    <Div>
       <BrowserRouter>
          <Header id={id} setId={setId}></Header>
          <Route exaxt path='/' render={(props) => <App pages={pages} setPages={setPages} movies={movies} setMovies={setMovies} details={details} setDetails={setDetails} setId={setId}></App>}></Route>
          <Route path='/detail' render={(props) => <Detail newFavorites={newFavorites} movies={movies} details={details} id={id} setId={setId} favorites={favorites} setFavorites={setFavorites}></Detail>}></Route>
          <ul>
          <Route path='/list' render={(props) => <List favorites={favorites} setFavorites={setFavorites} details={details} movies={movies} id={id} setid={setId}></List>}></Route>
          </ul>
          <Route path='/upcoming' render={(props) => <UpComing  movies={movies} setMovies={setMovies} setId={setId}></UpComing>}></Route>
          <Route path='/favorite' render={(props)=><Favorite favoritecards={favoritecards} favorites={favorites} setFavorites={setFavorites} movies={movies} id={id} ></Favorite>}></Route>
          <ul>
               <Route path='/favoritelist' render={(props)=> <FavoriteList  favorites={favorites} setFavorites={setFavorites} movies={movies} id={id} ></FavoriteList>}></Route>
          </ul>
          <Route path='/favoritedetail' render={(props) => <FavoriteDetail favorites={favorites} id={id}></FavoriteDetail>}></Route>
          /* <PageContoroll pages={pages} setPages={setPages}></PageContoroll> */
          </BrowserRouter>
         
    </Div>
    )
}

export default Router