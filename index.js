const { initial } = require("jshint/src/prod-params");

function myEach(collection, callback) {
    Object.values(collection).forEach(element => callback(element));
    return collection;
}

function myMap(collection, callback) {
    let array = Object.values(collection);
    return array.map(el => callback(el));
}

function myReduce(collection, callback, initial = undefined) {
    let array = Object.values(collection);

    let acc = initial || array[0];
    let startIndex = initial !== undefined ? 0 : 1;
    for (let i = startIndex; i < array.length; i++) {
        const val = array[i];
        acc = callback(acc, val, array);
    }
    return acc;
}

function myFind(collection, predicate) {
    return Object.values(collection).find((val) => predicate(val));
}
function myFilter(collection, predicate) {
    return Object.values(collection).filter((val) => predicate(val));
}
function mySize(collection) {
    return Object.values(collection).length;
}

function myFirst(array, count) {
    return count ? array.slice(0, count) : array[0];
}
function myLast(array, count) {
    return count ? array.slice(array.length - count) : array[array.length - 1];
}
function myKeys(object) {
    return Object.keys(object);
}
function myValues(object) {
    return Object.values(object);
}