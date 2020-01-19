
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const ccxws = require("ccxws");
const binance = new ccxws.binance();

app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, () => console.log(`It works!`));

const market = {
    id: "BTCUSDT",
    base: "BTC",
    quote: "USDT",
};

binance.on("l2snapshot", snapshot => {
    data = {
        asks: snapshot.asks.slice(0, 3),
        bids: snapshot.bids.slice(0, 3)
    };
    io.send(data)
});
   
binance.subscribeLevel2Snapshots(market);
