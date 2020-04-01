// サーバーサイドを扱うexpressをインポート
const express =require("express")

// モデルをインポートする
const User=require('./users')

// データベースを接続するためにmongooseをインポート
const mongoose =require('mongoose')

// サーバーサイドアプリの作成
const app=express()

// ミドルウェアの設定
// 必ず必要
app.use(express.urlencoded({extended: true})) //URLの解読
app.use(express.json()) // サーバー側でjson形式に変換

// ポート番号の設定
const port= 3001
 
// データベースのurlを入力 "mongodb://localhost/DB名"
const url =  "mongodb://localhost/userDB"

// データベースと接続しているときにサーバーの処理を行う
mongoose.connect(url, (err)=>{
    if (err) console.log(err)
    console.log(`データベースに接続できました`)

    // GET処理を書く
    app.get("/api/users", (req, res)=>{
        // reqのデータを取り出す
        console.log(req.body.favorites)
        
        // Userモデルのインスタンス(Userモデルの一つを作成)
        new User({
            name: req.body.favorites
            //データベースにデータを保存
        }).save((err)=>{
            if (err) res.send(err)
            // データを保存したことをクライアント側（ブラウザ上）に知らせる
            res.json({
                msg: `${req.body.favorites}のデータが保存できました`
            })
            console.log( `${req.body.favorites}のデータが保存できました`)

        })
        
        })
    
    // get時の処理
    app.get('/api/users',(req, res)=>{
        // データを集める(第一引数の持ってきたいデータは全てなので空にする)
        User.find({},(err, usersArray)=>{
            if (err) res.send(err)
            // そのデータを送る
            res.json({
                data: usersArray
            })
        })
      

    })

    // アプリの起動
    app.listen(port, (err)=>{
        if(err) throw new Error(err)
        console.log(`Listening on port ${port}`)
    })


})

