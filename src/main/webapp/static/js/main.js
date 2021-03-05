function init(){
    let container = document.getElementsByClassName('.container');
    displayHackerNews();
}

async function getContent(page) {
    const response = await fetch(`https://api.hnpwa.com/v0/news/${page}.json#`);
    document.getElementById('contents').innerHTML = "";
    console.log(response);
    return await response.json();
}

async function displayHackerNews() {
    let page = 1;
    const contents = await getContent(page);
    let newsCards = document.getElementById('contents');
    newsCards.insertAdjacentHTML('beforeend',
        "<div class=\"card-columns\">\n" +
            drawCard(contents) +
        "</div>")
    }

    function drawCard(contents){
        let cards = "";
        for (let content of contents) {
            cards = cards +
                "<div class=\"card bg-light mb-3\" style=\"max-width: 18rem;\">\n" +
                "  <div class=\"card-header\"><a href='" + content['url'] + "'> " + content['title'] +"</a></div>\n" +
                "  <div class=\"card-body\">\n" +
                "    <h5 class=\"card-title\">" + content['domain'] + "</h5>\n" +
                "    <p class=\"card-text\">" + content['time_ago'] + "</p>\n" +
                "  </div>\n" +
                "</div>";

        }
        return cards;
    }

init();