import React from "react"
import PageContoroll from "./PageContoroll"
import styled from "styled-components"

const Img =styled.img`
width:200px;
`
const Div=styled.div`
padding-top: 20px;
display: flex;
height: 90px;
`

const List =() => {
    return (
       //中央ぞろえ
       <Div style={{margin:'auto',width:'50%'}}> 
           <Img src="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg" />
            <Img src="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg" />
            <Img src="https://image.tmdb.org/t/p/w185/3L05HQS4GiR8PXCq0JjqXShoLRF.jpg" />
            <PageContoroll></PageContoroll>

        </Div>
    )
}

export default List