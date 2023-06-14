//Express Server インスタンスを作成
const express = require("express");
const app = express();

//静的ファイルの提供　publicフォルダを指定
app.use(express.static("public"));
app.use("/public", express.static("public"));

//htmlファイルを表示　/__dirnameはルートディレクトリ
app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log("Start Server!");
});

//http://localhost:3000/