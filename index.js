const { initial } = require("jshint/src/prod-params");

function makeArrayFromUncleanInput(input) {
  return Array.isArray(input)
    ? input
    : typeof input !== "object"
    ? [input]
    : Object.values(input);
}

function myEach(collection, callback) {
  const [head, ...tail] = makeArrayFromUncleanInput(collection);
  if (head !== undefined) {
    callback(head);
    myEach(tail, callback);
  }
  return collection;
}

function myMap(collection, callback) {
  const [head, ...tail] = makeArrayFromUncleanInput(collection);
  return head !== undefined
    ? [callback(head)].concat(myMap(tail, callback))
    : [];
}

function myReduce(collection, callback, acc) {
  return myReduceCore(collection, collection, callback, acc);
}
function myReduceCore(entireCollection, remainingCollection, callback, acc) {
  const [head, ...tail] = makeArrayFromUncleanInput(remainingCollection);
  return acc === undefined
    ? myReduceCore(entireCollection, tail, callback, head)
    : head !== undefined
    ? myReduceCore(
        entireCollection,
        tail,
        callback,
        callback(acc, head, entireCollection)
      )
    : acc;
}

function myFind(collection, predicate) {
  const [head, ...tail] = makeArrayFromUncleanInput(collection);
  return head === undefined
    ? undefined
    : predicate(head)
    ? head
    : myFind(tail, predicate);
}

function myFilter(collection, predicate) {
  const [head, ...tail] = makeArrayFromUncleanInput(collection);
  return head === undefined
    ? []
    : predicate(head)
    ? [head].concat(myFilter(tail, predicate))
    : myFilter(tail, predicate);
}

function mySize(collection) {
  const [head, ...tail] = makeArrayFromUncleanInput(collection);
  return head === undefined ? 0 : 1 + mySize(tail);
}

function myFirst(array, count) {
  const [head, ...tail] = array;
  return head === undefined ? [] : count !== undefined ? [head] : head;
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
