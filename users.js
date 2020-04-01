//スキーマ(データの型)の設定
// require→import
const mongoose = require('mongoose')


// データの型を定義する
// new→classの書き方(class→設計図,instance→実際の物)
const UserSchema = new mongoose.Schema({
    favorites: String,
})

// モデル(データの管理ができる形にする)の作成,データの検索、新規作成、削除を扱える
const User = mongoose.model("User", UserSchema)

// モデルをサーバーで使いたいのでエクスポートする
module.exports = User

