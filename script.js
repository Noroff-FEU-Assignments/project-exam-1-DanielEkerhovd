import { fetchData } from "./js/api/apicall.js";
import { apiURL } from "./js/api/url.js";
import { createBlogHtml } from "./js/pages/blogs.js";

const apiCalled = await fetchData(apiURL);

let currentPage = window.location.pathname;

switch (currentPage) {
    case '/index.html' || '/':
        
        break;
    case '/html/blogs.html':

         createBlogHtml(apiCalled);

        break;
    case '/html/blogpost.html':
        
        break;
    default:
        // Error code
        break;
}