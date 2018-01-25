export function safeGet(object, pathArray, fallback) {
    const target = pathArray.reduce((obj, property) => obj && obj[property], object);
    return typeof target !== 'undefined' ? target : fallback;
}