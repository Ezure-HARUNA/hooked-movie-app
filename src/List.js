import React from "react"
import Pagination from "./PageContoroll"
import styled from "styled-components"

const Img =styled.img`
width:200px;
`
const List =() => {
    return (
       //中央ぞろえ
       <div style={{margin:'auto',width:'50%'}}> 
           <Img src="../img/movieImg.jpg" />
            <Img src="../img/movieImg.jpg" />
            <Img src="../img/movieImg.jpg" />

        </div>
    )
}

export default List