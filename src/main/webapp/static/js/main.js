function init(){
    let actualPage = 1;
    let cardByPage = 30;
    let apiSource = document.getElementById('whichApi').dataset.api
    if(apiSource === "top"){
        apiSource = "news"
    }
    let url = `https://api.hnpwa.com/v0/${apiSource}/${actualPage}.json#`;
    displayHackerNews(url, actualPage, cardByPage);
}

async function getContent(url) {
    const response = await fetch(url);
    document.getElementById('contents').innerHTML = "";
    console.log(response);
    return await response.json();
}

async function displayHackerNews(url, actualPage, cardByPage) {
    const contents = await getContent(url);
    console.log("number of news: ", contents.length)
    let allPageNumber = ((contents.length - (contents.length % cardByPage))/cardByPage);
    if(contents.length % cardByPage !== 0){
        allPageNumber++;
    }
    let newsCards = document.getElementById('contents');
    newsCards.insertAdjacentHTML('beforeend',
        "<button id=\"prev\" class=\"btn btn-outline-info btn-sm\" onclick=\"previous_page_single()\" >Previous</button>\n" +
        "<button id=\"next\" class=\"btn btn-outline-info btn-sm\" onclick=\"next_page_single()\" >Next</button>\n" +
    "<br><br>")
    newsCards.insertAdjacentHTML('beforeend',
        "<p id=\"pageIndex\" data-page-number=" + actualPage + " data-all-page-number=" + allPageNumber + "></p>" +
        "<div class=\"card-columns\">\n" +
            drawCard(contents, 0, cardByPage) +
        "</div>")
    newsCards.insertAdjacentHTML('afterend',
        `    <footer class="col-md-4 ml-auto">
        <p> Created by Csaba Toth, email: lesitocsa@gmail.com </p>
    </footer>`)
    }

    function drawCard(contents, startingCardNumber, numberOfCardsByPage){
        let cards = "";
        let counter = 0;
        let pointList = [];
        let numberOfLastCardByPage = startingCardNumber + numberOfCardsByPage
        let apiSource = document.getElementById('whichApi').dataset.api
        if(apiSource === "top"){
            for(let item of contents){
                pointList.push(parseInt(item['points']));
            }
            pointList.sort(function(a, b){return b-a});
            for(let point of pointList){
                for(let content of contents){
                    if(point === parseInt(content['points']) ){
                        cards = cards +
                            `<div class="card bg-light mb-3" style="max-width: 18rem; id="${counter}" data-points="${content['points']}"> 
                      <div class="card-header"><a href="${content["url"]}"> ${content['title']}</a></div>
                      <div class="card-body">
                        <h5 class="card-title">${content['domain']}</h5>
                        <p class="card-text">${content['time_ago']}</p>
                      </div>
                 </div>`;
                    }
                }
                counter++;
            }
        } else {
            for (let content of contents) {
                if(startingCardNumber <= counter && counter < numberOfLastCardByPage){
                    cards = cards +
                        `<div class="card bg-light mb-3" style="max-width: 18rem; id="${counter}" data-points="${content['points']}"> 
                      <div class="card-header"><a href="${content["url"]}"> ${content['title']}</a></div>
                      <div class="card-body">
                        <h5 class="card-title">${content['domain']}</h5>
                        <p class="card-text">${content['time_ago']}</p>
                      </div>
                 </div>`;
                    counter++;
                }
            }
        }
        return cards;
    }
    function previous_page_single(){
    alert("go to previous page if it exists");
    }

    function next_page_single(){
        alert("go to next page if it exists");
    }


init();