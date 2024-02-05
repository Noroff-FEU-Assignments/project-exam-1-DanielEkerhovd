import { fetchData } from "./js/api/apicall.js";
import { apiURL } from "./js/api/url.js";
import { createBlogHtml } from "./js/pages/blogs.js";
import { createBlogPostHtml } from "./js/pages/blogpost.js";
import { shrinkHeader } from "./js/tools/shrinkHeader.js";
import { createCarousellContent } from "./js/pages/blogCarousell.js";
import { indexCarousell } from "./js/carousell/carousell.js";

const apiCalled = await fetchData(apiURL);

let currentPage = window.location.pathname;

shrinkHeader();

switch (currentPage) {
    case '/index.html' || '/':

        indexCarousell();
        createCarousellContent(apiCalled);

        console.log(apiCalled[0].acf);

        break;
    case '/html/blogs.html':

         createBlogHtml(apiCalled);

        break;
    case '/html/blogpost.html':
        createBlogPostHtml(apiCalled);
        break;
    default:
        // Error code
        break;
}