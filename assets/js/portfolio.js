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
    $(".modal-body").html("Get the recent articles form MtgGoldfish to stay up to date while being able to leave comments on specific articles. This app was developed using Handlebars, jQuery, Node, Bootstrap, Express, and Mongoose.")
    $(".appBtn").attr("href", "https://mtgdatafish.herokuapp.com/")
    $(".gitBtn").attr("href", "https://github.com/EricVincitore/mongoose-hw")
});

$(".mhwBtn").click(function() {
    event.preventDefault();
    $(".modal-title").html("Monster Clicker: World")
    $(".modal-body").html("Test your memory with this Monster Hunter: World themed game. This app was developed using React, Node and Bootstrap")
    $(".appBtn").attr("href", "https://ericvincitore.github.io/clicky-game/")
    $(".gitBtn").attr("href", "https://github.com/EricVincitore/clicky-game")
});

$(".gifBtn").click(function() {
    event.preventDefault();
    $(".modal-title").html("Gif It")
    $(".modal-body").html("Entertain yourself with all the different gifs you could ask for with this animal themed search tool. This app was developed using HTML5, Bootstrap, jQuery and AJAX")
    $(".appBtn").attr("href", "https://ericvincitore.github.io/Gif-App/")
    $(".gitBtn").attr("href", "https://github.com/EricVincitore/Gif-App")
});

