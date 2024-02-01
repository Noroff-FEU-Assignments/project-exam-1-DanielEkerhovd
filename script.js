import { fetchData } from "./js/api/apicall.js";
import { apiURL } from "./js/api/url.js";

const apiCall = await fetchData(apiURL);
console.log(apiCall);