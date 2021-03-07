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
    let apiSource = document.getElementById('whichApi').dataset.api;
    if(apiSource !== "news"){
        newsCards.insertAdjacentHTML('beforeend',
            "<button id=\"prev\" class=\"btn btn-outline-info btn-sm\" onclick=\"previous_page_single()\" >Previous</button>\n" +
            "<button id=\"next\" class=\"btn btn-outline-info btn-sm\" onclick=\"next_page_single()\" >Next</button>\n" +
            "<br><br>")
    }
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
        let idList = [];
        let pointMapList = [];
        let timeList = [];
        let numberOfLastCardByPage = startingCardNumber + numberOfCardsByPage;
        let apiSource = document.getElementById('whichApi').dataset.api;
        if(apiSource === "top"){
            for(let item of contents){
                if(item["points"] !== null){
                    pointMapList.push({"id":item['id'], "point":parseInt(item['points'])});
                } else {
                    pointMapList.push({"id":item['id'], "point": 0});
                }
            }
            idList = getIdList(pointMapList);
            for(let id of idList){
                for(let content of contents){
                    if(id === parseInt(content['id']) ){
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
        } else if(apiSource === "newest"){
            for(let item of contents){
                if(item["points"] !== null){
                    pointMapList.push({"id":item['id'], "time_ago":item['time_ago']});

                } else {
                    pointMapList.push({"id":item['id'], "time_ago": "1000 days ago"});
                }
            }
            idList = getNewestIdList(pointMapList);
            for(let id of idList){
                for(let content of contents){
                    if(id === parseInt(content['id']) ){
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
        } else if(apiSource === "jobs"){
            for (let content of contents) {
                if(startingCardNumber <= counter && counter < numberOfLastCardByPage){
                    cards = cards +
                        `<div class="card bg-light mb-3" style="max-width: 18rem; id="${counter}" data-points="${content['points']}"> 
                      <div class="card-header"><a href="${content["url"]}"> ${content['title']}</a></div>
                      <div class="card-body">
                        <p class="card-text">${content['time_ago']}</p>
                      </div>
                 </div>`;
                    counter++;
                }
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

    function getIdList(pointMapList){
    let idList = [];
    for(let j=0; j<pointMapList.length - 1; j++){
        for(let i=0; i<pointMapList.length - 1; i++){
            if(pointMapList[i]["point"] < (pointMapList[i+1]["point"])){
                let tmpMap = {"id":pointMapList[i+1]["id"],"point": pointMapList[i+1]["point"]};
                pointMapList[i+1] = pointMapList[i];
                pointMapList[i] = tmpMap;
            }
        }
    }
        for(let map of pointMapList){
            idList.push(map["id"])
        }
    return idList;
    }

    function getNewestIdList(pointMapList){
        let idList = [];
        let index = 0;
        for(let map of pointMapList){
            pointMapList[index]["time_ago"] = getConvertedTimeAgo(map["time_ago"]);
            index++;
        }
        for(let j=0; j<pointMapList.length - 1; j++){
            for(let i=0; i<pointMapList.length - 1; i++){
                if(pointMapList[i]["point"] > (pointMapList[i+1]["point"])){
                    let tmpMap = {"id":pointMapList[i+1]["id"],"point": pointMapList[i+1]["point"]};
                    pointMapList[i+1] = pointMapList[i];
                    pointMapList[i] = tmpMap;
                }
            }
        }
        for(let map of pointMapList){
            idList.push(map["id"])
        }
        return idList;
    }
    function getConvertedTimeAgo(time_ago){
    let convertedValue = 0;
    let stringList = [];
    let index = 0;
    // todo a/an/x day/days/hour/hours ago
         stringList = time_ago.split(" ");
         for(let item of stringList){
             if(item === "a" || item === "an"){
                 stringList[index] = 1;
             } else if (!isNaN(item)){
                 stringList[index] = parseInt(item);
             } else if (item === "day" || item === "days"){
                 stringList[index] = 1440;
             } else if (item === "hours" || item === "hour"){
                 stringList[index] = 60;
             } else if (item === "minute" || item === "minutes"){
                 stringList[index] = 1;
             } else {
                 stringList[index] = 0;
             }
         }
         convertedValue = stringList[0] * stringList [1];
    return convertedValue;
    }

init();