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
    let actualPage = 1;
    let numberByPage = 30;
    const contents = await getContent(actualPage);
    let newsCards = document.getElementById('contents');
    newsCards.insertAdjacentHTML('beforeend',
        "<button id=\"prev\" class=\"btn btn-outline-info btn-sm\" onclick=\"previous_page_single()\" >Previous</button>\n" +
        "<button id=\"next\" class=\"btn btn-outline-info btn-sm\" onclick=\"next_page_single()\" >Next</button>\n" +
    "<br><br>")
    newsCards.insertAdjacentHTML('beforeend',
        "<p id=\"pageIndex\" data-page-number=" + actualPage + "></p>" +
        "<div class=\"card-columns\">\n" +
            drawCard(contents, numberByPage) +
        "</div>")
    }

    function drawCard(contents, numberByPage){
        let cards = "";
        let counter = 0;
        for (let content of contents) {
            if(counter < numberByPage){
            cards = cards +
                `<div class="card bg-light mb-3" style="max-width: 18rem;"> 
                  <div class="card-header"><a href="${content["url"]}"> ${content['title']}</a></div>
                  <div class="card-body">
                    <h5 class="card-title">${content['domain']}</h5>
                    <p class="card-text">${content['time_ago']}</p>
                  </div>
                </div>`;
            counter++;
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