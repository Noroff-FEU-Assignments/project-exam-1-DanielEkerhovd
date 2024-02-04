import { fetchData } from "./js/api/apicall.js";
import { apiURL } from "./js/api/url.js";
import { createBlogHtml } from "./js/pages/blogs.js";
import { createBlogPostHtml } from "./js/pages/blogpost.js";
import { shrinkHeader } from "./js/tools/shrinkHeader.js";

const apiCalled = await fetchData(apiURL);

let currentPage = window.location.pathname;

shrinkHeader();

switch (currentPage) {
    case '/index.html' || '/':
        
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