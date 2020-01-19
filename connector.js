
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const ccxws = require("ccxws");
const binance = new ccxws.binance()
const zb = new ccxws.zb();

app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () => console.log(`It works!`));

const marketBinance = {
    id: "BTCUSDT",
    base: "BTC",
    quote: "USDT",
};

const marketZB = {
    id: "btc_usdt",
    base: "BTC",
    quote: "USDT",
};

binance.on("l2snapshot", snapshot => {
    data = {
        asks: snapshot.asks.slice(0, 10),
        bids: snapshot.bids.slice(0, 10)
    };
    io.emit("binance", data)
});

zb.on("l2snapshot", snapshot => {
    data = {
        asks: snapshot.asks.slice(0, 10),
        bids: snapshot.bids.slice(0, 10)
    };
    io.emit("zb", data)
});
   
binance.subscribeLevel2Snapshots(marketBinance);
zb.subscribeLevel2Snapshots(marketZB);
