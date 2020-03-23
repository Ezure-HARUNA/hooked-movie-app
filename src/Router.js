import React from "react"
import {BrowserRouter , Route} from "react-router-dom";
import App from "./App"
import Header from "./Header"
import Detail from "./Detail"
import List from "./List"
import FavoriteList from "./FavoriteList"
import UpComing from "./UpComing"
import Favorite from "./Favorite"

import styled from "styled-components"

const Div=styled.div`
   background-color: #282A3A;
`

const Router =() =>{
    const [movies, setMovies] = React.useState([])
    const [details, setDetails] =React.useState([])
    const [favorites, setFavorites] =React.useState([]);
    const [id, setId] =React.useState("")
    let newFavorites ;

    const moviecards=movies.map((movie, id) =>{
      return (
   <List setId={setId} id={id} movie={movie} movies={movies}/>
      )
      })

   const favoritecards=favorites.map((favorite, id) =>{
      return (
         <FavoriteList setId={setId} id={id} favorite={favorite} favorites={favorites}/>
      )
   })

   

    return (
    <Div>
       <BrowserRouter>
          <Header id={id} setId={setId}></Header>
          <Route exact path='/' render={() => <App moviecards={moviecards} movies={movies} setMovies={setMovies} details={details} setDetails={setDetails} setId={setId}></App>}></Route>
          <Route path='/detail' render={() => <Detail newFavorites={newFavorites} movies={movies} details={details} id={id} setId={setId} favorites={favorites} setFavorites={setFavorites}></Detail>}></Route>
          <Route path='/list' render={() => <List favorites={favorites} setFavorites={setFavorites} details={details} movies={movies} id={id} setid={setId}></List>}></Route>
          <Route path='/upcoming' render={() => <UpComing movies={movies} setMovies={setMovies} setId={setId}></UpComing>}></Route>
          <Route exaxt path='/favorite' render={()=><Favorite favoritecards={favoritecards} id={id}></Favorite>}></Route>
          <Route path='/favoritelist' render={()=> <Favorite favorites={favorites} setFavorites={setFavorites} movies={movies} id={id} ></Favorite>}></Route>
       </BrowserRouter>
    </Div>
    )
}

export default Router