import { fetchData } from "./js/api/apicall.js";
import { apiURL } from "./js/api/url.js";
import { createBlogHtml } from "./js/pages/blogs.js";
import { createBlogPostHtml } from "./js/pages/blogpost.js";
import { shrinkHeader } from "./js/tools/shrinkHeader.js";
import { createCarousellContent } from "./js/pages/blogCarousell.js";
import { indexCarousell } from "./js/carousell/carousell.js";

const apiCalled = await fetchData(apiURL);

let currentPage = window.location.pathname;
console.log(currentPage);

shrinkHeader();

switch (currentPage) {
    case '/':
    case '/index.html':

        indexCarousell();
        createCarousellContent(apiCalled);

        break;

    case '/blogs.html':
    case '/blogs':

         createBlogHtml(apiCalled);

        break;

    case '/blogpost.html':
    case '/blogpost':

        createBlogPostHtml(apiCalled);
        break;
        
    default:
        // Error code
        console.log("Error")
        break;
}