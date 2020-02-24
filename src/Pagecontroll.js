//➀インポート
import React from "react"

    //マテリアルUIのインポート
    mport Pagination from '@material-ui/lab/Pagination'

//➁コンポーネント
const Pagecontroll =() => {

        //➂レンダリング
        return (
           <div>
                <Pagination count={10} color="primary" />   
           </div>
        )

}

//➃エクスポート
export default Pagecontroll
