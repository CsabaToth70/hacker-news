# Hacker news client

## Story

One of your best friends, Michael Hackson is really into tech news.
He prefers those aggregator sites where there are no ads
just pure news with their title. So Michael can decide whether the title is catchy enough
and navigate to the concrete news, or just ignore it. This is the reason he always talks about
[Hacker news](https://news.ycombinator.com/news). Although he loves it, he imagined
some extra custom features and a more exciting design which is not so...puritan.
He knows your background and admires your programming skills so he reached out to you
to create a custom looking hacker news client exclusively for him.
As his birthday is around the corner, you take the opportunity of surprising him.

## What are you going to learn?

- refreshing your knowledge of asynchronously fetching data from backend
- serializing data to json
- calling an API from the backend
- what is layered architecture
- use web servlets in Java


## Tasks

1. Create a web application which renders news from `Hacker news` site
    - The opening page of the website (`/`) can be accessed
    - There is a menu at the top of the page with the following elements:
- `Hackson news`
- `Top news`
- `Newest`
- `Jobs`
    - When I click on Hackson news it navigates back to the start page
    - When I click on top news it refreshes the page's inner content with the top news without page reload. See details below.
    - When I click on jobs, it refreshes the page inner content with the jobs without page reload. See details below.
    - There is a footer with your name and email address

2. Show top news from `Hacker News` site as cards next to each other
    - There is an api endpoint `/api/top?page=1` which provides top news data in json format as follows: ```json [
  {
  "title": "Show HN: I'm starting a Svelte JavaScript newsletter",
  "timeAgo": "a few seconds ago",
  "author": "d3sandoval",
  "url": "https://svelte.substack.com/"
  },
  ...
] ... ``` - if the page parameter is not defined then the first 30 elements are received - in case the page parameter is set, then the proper page of data is received (`GET /api/top?page=5` returns with the news from the 5th page)
    - The opening page of the website (`/`) loads first 30 top news from hacker news
    - The page has an HTML `div` element containing the data in cards
    - Every card shows the following information of a piece of news:
- `Title` as link to the original article
- `Author` - the uploader, if any
- `TimeAgo` - written info about when the news was published
    - The webpage follows a basic design: ![Hackernews Screenshot 01](media/oop/hacker-news-screenshot-01.png)
    - There's a next button above the cards, clicking that shows the next 30 items of news, if any
    - There's a previous button above the cards, clicking that shows the previous 30 items of news, if any

3. When I select `Newest` from the menu, the page content changes to newest news.
    - There is an api endpoint `/api/newest?page=1` which provides newest news data in json format as follows: 1        ```json [
  {
  "title": "Show HN: I'm starting a Svelte JavaScript newsletter",
  "timeAgo": "a few seconds ago",
  "author": "d3sandoval",
  "url": "https://svelte.substack.com/"
  },
  ...
] ``` - if the page parameter is not defined, then the first 30 elements are received - in case the page parameter is set, then the proper page of data is received (`GET /api/newest?page=5` returns with the news from the 5th page)
    - When I click on the `Newest` button in the menu the page refreshes the cards' content with the first 30 items of newest news
    - The page has an HTML `div` element containing the data in cards
    - Every card shows the following information of a piece of news:
- `Title` as link to the original article
- `Author` - the uploader, if any
- `TimeAgo` - written info about when the news was published
    - There's a next button above the cards, clicking that shows the next 30 news, if any
    - There's a previous button above the cards, clicking that shows the previous 30 news, if any

4. When I select `Jobs` from the menu the page content changes to jobs related news.
    - There is an api endpoint `/api/jobs?page=1`, which provides job news data in json format as follows: ```json [
  {
      "title": "Flexport is hiring engineers in Amsterdam",
      "timeAgo": "a day ago",
      "author": "",
      "url": "https://Flexport.com"
  },
  ...
] ``` - if the page parameter is not defined, then the first 30 elements are received - in case the page parameter is set, then the proper page of data is received (`GET /api/jobs?page=5` returns with the news from the 5th page)
    - The page has an HTML `div` element containing the data in cards
    - Every card shows the following information of a piece of job news:
- `Title` as link to the original article
- `TimeAgo` - written info about when the news was published
    - There's a next button above the cards, clicking that shows the next 30 job news, if any
    - There's a previous button above the table, clicking that shows the previous 30 job news, if any

## General requirements

- For the whole project, get the data using [Hacker news API](https://api.hnpwa.com/v0) on the backend side
- The page doesn't show a server error anytime during the review
- All code is pushed to GitHub repository by atomic commits. The implemented feature related commits are managed on separated feature branches and merged by a pull request to the `master` branch.

## Hints

- For examining json data you can install [JSON viewer Pro](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc) extension for Chrome
- Whenever you have to work with APIs, it is extremely useful to have [Postman](https://www.postman.com/)
- If the domain is missing from the json response, it means it is an article from the hacker news itself, like [this one](https://news.ycombinator.com/item?id=23574723)
- To define immutable data, that is globally shared and accessed across a web application, use [context initialization parameters](https://www.baeldung.com/context-servlet-initialization-param#initializing-context-parameters)
- In case of serializing a list of objects, [you should define the TypeToken as well](https://stackoverflow.com/a/5554296)


## Background materials

- <i class="far fa-exclamation"></i> [Introducing servlets](project/curriculum/materials/pages/java/introducing-servlets.md)
- <i class="far fa-exclamation"></i> [Servlets tutorial](https://www.tutorialspoint.com/servlets/servlets-form-data.htm)
- <i class="far fa-exclamation"></i> [Serialization in Java](project/curriculum/materials/pages/java/serialization-in-java.md)
- <i class="far fa-exclamation"></i> [Simple HTTP request in Java](https://www.baeldung.com/java-http-request)
- <i class="far fa-exclamation"></i> [Returning a JSON response from a servlet](https://www.baeldung.com/servlet-json-response)
- <i class="far fa-exclamation"></i> [Custom Gson serialization](https://futurestud.io/tutorials/gson-advanced-custom-serialization-part-1)
- <i class="far fa-book-open"></i> [Layered architecture](https://medium.com/@priyalwalpita/software-architecture-patterns-layered-architecture-a3b89b71a057)
- <i class="far fa-book-open"></i> [Retrieving data from the backend](project/curriculum/materials/pages/web/the-last-missing-piece-api.md)
- <i class="far fa-book-open"></i> [Do you remember of REST?](project/curriculum/materials/pages/web/restful.md)

