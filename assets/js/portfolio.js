$(".CCBtn").click(function() {
    event.preventDefault();
    $(".modal-title").html("Command Central")
    $(".modal-body").html("An all encompassing Magic: the Gathering companion app that offers the user articles, metagame data, a card database and more. This app was developed using React, Reactstrap, Javascript, Node, Passport, Express and Mongoose.")
    $(".appBtn").attr("href", "https://command-central.herokuapp.com/")
    $(".gitBtn").attr("href", "https://github.com/EricVincitore/command-central")
});

$(".fishBtn").click(function() {
    event.preventDefault();
    $(".modal-title").html("MTG Data Fish")
    $(".modal-body").html("Get the recent articles form MtgGoldfish to stay up to date while being able to leave comments on specific articles. This app was developed using Handlebars, Javascript, Node, Bootstrap, Express, and Mongoose.")
    $(".appBtn").attr("href", "https://mtgdatafish.herokuapp.com/")
    $(".gitBtn").attr("href", "https://github.com/EricVincitore/mongoose-hw")
});