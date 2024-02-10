export function checkingredients(text, current) {

    let textValue = '';

    switch (text) {
    case 'show':
            textValue = current;
            break;
    
        case "":
            break;
    
        default:
            textValue = text + ' ' + current;
            break;
        }

    return textValue;
  
}