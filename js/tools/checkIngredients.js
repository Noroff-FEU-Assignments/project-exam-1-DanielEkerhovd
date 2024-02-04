export function checkingredients(api, ingredient) {

    let textValue = '';

    switch (api) {
    case 'show':
            textValue = ingredient;
            break;
    
        case "":
            break;
    
        default:
            textValue = api + ' ' + ingredient;
            break;
        }

    return textValue;
  
}