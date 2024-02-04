//Search an array of objects for a specific id and return the object

export function fetchDataByID(api) {

    const searchedID = window.location.search;
    const parameter = new URLSearchParams(searchedID);
    const id = parameter.get('blogid');

    const returnArray = (api.find((item) => item.id == id));

    return returnArray;

}