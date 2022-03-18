function changeUrl(url) {
    window.location.href = url;
}

function getJson() {
    var url = "config.json";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.status !== 200) {
        alert(xhr.status + ": " + xhr.statusText);
    } else {
        return JSON.parse(xhr.responseText);
    }
}

function run() {
    var config = getJson();
    var cardlist = document.getElementById("cardlist");
    for (var i = 0; i < config.length; i++) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = "<a href=\"" + config[i]['url'] + "\" target=\"_blank\"> <div class=\"card-img\"><img src=\"" + config[i]['image'] + "\" alt=\"\"></div> <div class=\"card-content\"> <h3>" + config[i]['title'] + "</h3> <p>" + config[i]['description'] + "</p> </div> </a>";
        cardlist.appendChild(card);
    }
}