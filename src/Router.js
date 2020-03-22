import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom";
import App from "./App"
import Header from "./Header"
import Test from "./Test"
import Detail from "./Detail"
import List from "./List"
import UpComing from "./UpComing"
import Favorite from "./Favorite"

import styled from "styled-components"

const Div=styled.div`
background-color: #282A3A;
`


const Router =() =>{
    const [movies, setMovies] = React.useState([])
    const [favorites, setFavorites] =React.useState([]);
    const [toggleRemove, setToggleRemove] = React.useState(false)
    const [id, setId] =React.useState("")
    let newFavorites ;

    const moviecards=movies.map((movie, id) =>{
      return (
      <List setId={setId} id={id} movie={movie} movies={movies}/>
      )
      })

    return (
    <Div>
       <BrowserRouter>
          <Header id={id} setId={setId}></Header>
          <Route exact path='/' render={() => <App moviecards={moviecards} movies={movies} setMovies={setMovies} setId={setId}></App>}></Route>
          <Route path='/detail' render={(props) => <Detail newFavorites={newFavorites} movies={movies} id={id} setId={setId} favorites={favorites} setFavorites={setFavorites}></Detail>}></Route>
          <Route path='/list' render={(props) => <List favorites={favorites} setFavorites={setFavorites} movies={movies} id={id} setid={setId}></List>}></Route>
          <Route path='/upcoming' render={() => <UpComing movies={movies} setMovies={setMovies} setId={setId}></UpComing>}></Route>
          <Route path='/favoritelist' render={()=> <Favorite favorites={favorites} setFavorites={setFavorites} movies={movies} id={id} ></Favorite>}></Route>
          {/* toggleRemove={toggleRemove} setToggleRemove={setToggleRemove} */}
       </BrowserRouter>
    </Div>
    )
}

export default Router