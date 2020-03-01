//➀インポート
import React from "react";

    //マテリアルUIのインポート
import Pagination from '@material-ui/lab/Pagination'

//➁コンポーネント
const PageControll =() => {

        //➂レンダリング
        return (
            //中央ぞろえ
           <div style={{margin:'auto',width:'50%'}}> 
               <Pagination  count={10} color="primary" />
           </div>
        )

}

//➃エクスポート
export default PageControll


