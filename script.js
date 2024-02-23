import { fetchData } from "./js/api/apicall.js";
import { apiURL } from "./js/api/url.js";
import { createBlogHtml } from "./js/pages/blogs.js";
import { createBlogPostHtml } from "./js/pages/blogpost.js";
import { returnToBlogs } from "./js/content/blogsReturn.js";
import { shrinkHeader } from "./js/tools/shrinkHeader.js";
import { createCarousellContent } from "./js/pages/blogCarousell.js";
import { indexCarousell } from "./js/carousell/carousell.js";
import { hamburgerMenu } from "./js/content/hamburgerMenu.js";
import { carousel } from "./js/pages/components/carousel.js";
import { fetchDataAndSort } from "./js/api/sortByDate.js";
import { formValidation } from "./js/form_validation/formValidation.js";
import { createErrorMessage } from "./js/error/errorMessage.js";


const apiCalled = await fetchData(apiURL);  
const sortedApi = await fetchDataAndSort(apiCalled);  

hamburgerMenu();
shrinkHeader();

switch (window.location.pathname) {
    case '/':
    case '/index.html':

        if (sortedApi === 'error') {
            createErrorMessage('Could not load blogs', '.blogs-section');
        } else {
            carousel();
            createCarousellContent(sortedApi); 
        }; 

        break;

    case '/blogs.html':
    case '/blogs':

        if (sortedApi === 'error') {
            createErrorMessage('Could not load blogs', '.blog-posts');
        } else {
            createBlogHtml(sortedApi);
        }

        break;

    case '/blogpost.html':
    case '/blogpost':

        if (sortedApi === 'error') {
            createErrorMessage('Could not load blog post', '.blogpost-content');
            returnToBlogs();
        } else {
            createBlogPostHtml(sortedApi);
        };

        break;

    case '/contact.html':
    case '/contact':

        formValidation();
        break;
        
    default:
       
        function errorAlert() {
            alert('Could not load page, go back to home page: https://thebrewery.netlify.app/');
        }
        break;
}