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
    //const [ステート名、ステートの再定義関数名]= React.useState(ステートの初期値)
    const [searchValue, setSearchValue] = useState("");
    //ボタンが押されてsubmitした時に、検索処理を行う


        //1. ボタンが押されたことを感知する
        //2. 入力範囲をクリアにする
        //3. 検索機能を呼び出す

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