//Function used to limit the lenght of the text in the card by words amount

export function maxTextLength(text, limit = 40) {
    const words = text.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + ' [...]';
    } else {
        return text;
    }
}

export function maxTitleLenght(text, limit = 22) {
    if (text.length > limit) {
        return text.slice(0, limit) + '..';
    } else {
        return text;
    }
}

export function makeTitleFontSmaller (text, limit = 12) {
    if (text.length > limit) {
        return 'xsmall-title';
    } else {
        return 'small-title';
    }
}