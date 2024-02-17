import { fetchData } from "./js/api/apicall.js";
import { apiURL } from "./js/api/url.js";
import { createBlogHtml } from "./js/pages/blogs.js";
import { createBlogPostHtml } from "./js/pages/blogpost.js";
import { shrinkHeader } from "./js/tools/shrinkHeader.js";
import { createCarousellContent } from "./js/pages/blogCarousell.js";
import { indexCarousell } from "./js/carousell/carousell.js";
import { hamburgerMenu } from "./js/content/hamburgerMenu.js";
import { carousel } from "./js/pages/components/carousel.js";
import { fetchDataAndSort } from "./js/api/sortByDate.js";

const apiCalled = await fetchData(apiURL);
const sortedApi = await fetchDataAndSort(apiCalled);

hamburgerMenu();
shrinkHeader();

switch (window.location.pathname) {
    case '/':
    case '/index.html':

        carousel();
        createCarousellContent(sortedApi);

        break;

    case '/blogs.html':
    case '/blogs':

         createBlogHtml(sortedApi);

        break;

    case '/blogpost.html':
    case '/blogpost':

        createBlogPostHtml(sortedApi);
        break;
        
    default:
        // Error code
        console.log("Error")
        break;
}