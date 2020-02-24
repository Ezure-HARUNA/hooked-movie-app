//➀インポート
import React from "react"

    //styled-componentをインポート
    //import styled from "styled-components"

    //material-UIをインポート
    //import { makeStyles } from '@material-ui/core/styles';
    import TextareaAutosize from '@material-ui/core/TextareaAutosize';
    import Button from '@material-ui/core/Button';

//➁コンポーネント

const Search =(props) =>{

    //ボタンが押されてsubmitした時に、検索処理を行う

        //1. ボタンが押されたことを感知する

    //➂レンダリング
    return (
        <form>
            <TextareaAutosize aria-label="empty textarea" placeholder="キーワードを入力" />
            <Button variant="contained" color="primary" href="">
               検索
            </Button>
            
        </form>
        
    )


}





export default Search