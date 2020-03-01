//➀インポート
import React from "react"


    //styled-componentをインポート
    import styled from "styled-components"

    //material-UIをインポート
    //import { makeStyles } from '@material-ui/core/styles';
    //import TextareaAutosize from '@material-ui/core/TextareaAutosize';
    import Button from '@material-ui/core/Button';
    import SearchIcon from '@material-ui/icons/Search';
    import InputBase from '@material-ui/core/InputBase';
   

//➁コンポーネント
//検索フォームの背景変える(AppleBarの検索バーみたいにしたい)

const StyledButton = styled(Button)`
    margin-top: 10px!important; 
 `

const Search =(props) =>{
    //const [ステート名、ステートの再定義関数名]= React.useState(ステートの初期値)
    //const [searchValue, setSearchValue] = React.useState("");
    //ボタンが押されてsubmitした時に、検索処理を行う


        //1. ボタンが押されたことを感知する

        //2. 入力範囲をクリアにする

        //3. 検索機能を呼び出す

    
    //➂レンダリング
    return (
        <form align ="center">
            
            {/* <TextareaAutosize aria-label="empty textarea" placeholder="キーワードを入力" /> */}
            {/* <Button type="submit" variant="contained" color="primary" href=""> */}
               {/* 検索 */}
            {/* </Button> */}
            

            <div>
              <SearchIcon  disabled color="primary"/>
              <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
              <StyledButton variant="contained" color="primary" type="submit"><SearchIcon style={{ fontSize: 20 }} color="white">add</SearchIcon>検索</StyledButton>

            </div>

                        
        </form>
        
    )


}





export default Search
