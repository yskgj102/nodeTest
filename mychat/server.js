'use strict';

// モジュール
const http     = require('http');
const express  = require('express');
const socketIO = require('socket.io');
const moment   = require('moment');

// オブジェクト
const app    = express();
const server = http.Server(app);
const io     = socketIO(server);
// 公開フォルダの指定
app.use(express.static('../public'));
// 定数
const PORT = process.env.PORT || 3000;

// サーバーの起動
server.listen(PORT, () => {
    console.log('server starts on port: %d', PORT);
});
