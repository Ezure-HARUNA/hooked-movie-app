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


const Search =(props) =>{
    //const [ステート名、ステートの再定義関数名]= React.useState(ステートの初期値)
    const [searchValue, setSearchValue] = React.useState("");
    //ボタンが押されてsubmitした時に、検索処理を行う
    // ➀ボタンが押されたことを感知する
    const handleSearch =(e) =>{
        e.preventDefault()
        setSearch(e.target.value)
        fetch("https://api.themoviedb.org/3/search/movie?api_key=62df1d74f3375f28b7946846b540b1b9&language=en-US&query=apple&page=1&include_adult=false")
            .catch(err=>{
                if (err) console.error(err)
            })
            .then(res=>res.json())

            .then(res=> {
                console.log(res.results[0].title)
                // 連想配列の時はstringifyいらない
            })
            const resetInput =()=>{
                //➁入力範囲を空にする
                setSearchValue("")
            }
            // ➂検索機能の呼び出し
            props.search(searchValue)
            resetInput();
    }

   


    
     return (
        <form align ="center" className="search">
            
            {/* <TextareaAutosize aria-label="empty textarea" placeholder="キーワードを入力" /> */}
            {/* <Button type="submit" variant="contained" color="primary" href=""> */}
               {/* 検索 */}
            {/* </Button> */}
            
 
            <div>
              <SearchIcon disabled color="secondary"/>
              <form onSubmit={(e)=>{handleSearch(e)}} > 
                  {/* 定義と実行。returnでは定義の中に実行を入れる */}
                 <InputBase defaultValue={search} type="text" placeholder="Search…"  inputProps={{ 'aria-label': 'search' }}/>
                 <StyledButton type="submit" variant="contained" color="primary" ><SearchIcon style={{ fontSize: 20 }} color="white">add</SearchIcon>検索</StyledButton>
              </form>
              
              

            </div>

                        
        </form>
        
    )


}





export default Search
