import React from "react"
import {BrowserRouter, Link, Route} from "react-router-dom";
import App from "./App"
import Header from "./Header"
import Test from "./Test"
import Detail from "./Detail"

import styled from "styled-components"

const Div=styled.div`
background-color: #282A3A;
`


const Router =() =>{
    const [movies, setMovies] = React.useState([])
    const [id, setId] =React.useState("")
    return (
    <Div>
       <BrowserRouter>
          <Header><Test></Test></Header>
          <Route exact path='/' render={() => <App movies={movies} setMovies={setMovies} setId={setId}></App>}></Route>
          <Route path='/detail' render={(props) => <Detail movies={movies} id={id}></Detail>}></Route>
       </BrowserRouter>
    </Div>
    )
}

export default Router