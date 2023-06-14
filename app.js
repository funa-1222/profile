//Express Server インスタンスを作成
const express = require("express");
const app = express();

//静的ファイルの提供　publicフォルダを指定
app.use(express.static("public"));
app.use("/public", express.static("public"));