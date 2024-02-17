export async function fetchDataAndSort(api) {
    try {
        
    api.sort(function(a, b) {
        
        var dateA = new Date(a.acf.post_date.split('/').reverse().join('-'));
        var dateB = new Date(b.acf.post_date.split('/').reverse().join('-'));

        return dateB - dateA;
    });

    return api;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};