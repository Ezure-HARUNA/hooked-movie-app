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
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height:40px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  margin-left:10px;
  margin-top:-15px;
 `

const Search =() =>{
    //const [ステート名、ステートの再定義関数名]= React.useState(ステートの初期値)
    const [search, setSearch] = React.useState("");
    //ボタンが押されてsubmitした時に、検索処理を行う
    const handleSearch =(e) =>{
        setSearch(e.target.value)
    }

    const resetSearch =()=>{
        setSearch("")
    }

    const clickSearch =(e) => {
        e.preventdefault()
    }

        //1. ボタンが押されたことを感知する

        //2. 入力範囲をクリアにする

        //3. 検索機能を呼び出す

    
     return (
        <form align ="center">
            
            {/* <TextareaAutosize aria-label="empty textarea" placeholder="キーワードを入力" /> */}
            {/* <Button type="submit" variant="contained" color="primary" href=""> */}
               {/* 検索 */}
            {/* </Button> */}
            
 
            <div>
              <SearchIcon disabled color="secondary"/>
              <InputBase defaultValue={search} onChange={handleSearch} placeholder="Search…" type="text" inputProps={{ 'aria-label': 'search' }}/>
              <StyledButton onClick={clickSearch} type="submit" variant="contained" color="primary" type="submit"><SearchIcon style={{ fontSize: 20 }} color="white">add</SearchIcon>検索</StyledButton>

            </div>

                        
        </form>
        
    )


}





export default Search
