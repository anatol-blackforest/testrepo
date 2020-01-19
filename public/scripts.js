jQuery(document).ready(function () {

    const socket = io.connect('http://localhost:3000');

    socket.on('binance', function(result){

        let asks = "";
        let bids = "";

        result.asks.forEach((item, index, array) => asks += Math.floor(item.price) + " / " + (+item.size).toFixed(1) + "<br />")
        result.bids.forEach((item, index, array) => bids += Math.floor(item.price) + " / " + (+item.size).toFixed(1) + "<br />")

        $('#binance #asks').empty()
        $('#binance #bids').empty()

        $('#binance #asks').html(asks)
        $('#binance #bids').html(bids)

    })

    socket.on('zb', function(result){

        let asks = "";
        let bids = "";

        result.asks.forEach((item, index, array) => asks += Math.floor(item.price) + " / " + (+item.size).toFixed(1) + "<br />")
        result.bids.forEach((item, index, array) => bids += Math.floor(item.price) + " / " + (+item.size).toFixed(1) + "<br />")

        $('#zb #asks').empty()
        $('#zb #bids').empty()

        $('#zb #asks').html(asks)
        $('#zb #bids').html(bids)

    })
})
