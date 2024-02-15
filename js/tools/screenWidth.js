export function checkScreenWidth (setWidth) {
    const width = window.innerWidth;

    if (width <= setWidth) {
        return true;
    } else {
        return false;
    }
};