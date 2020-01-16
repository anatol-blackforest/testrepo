jQuery(document).ready(function () {

    const socket = io.connect('http://localhost:3000');
    socket.emit('loaded')

    socket.on('message', function(result){

        let asks = "";
        let bids = "";

        result.asks.forEach((item, index, array) => asks += item.price + "<br />")
        result.bids.forEach((item, index, array) => bids += item.price + "<br />")

        $('#asks').empty()
        $('#bids').empty()

        $('#asks').html(asks)
        $('#bids').html(bids)

    })
})
