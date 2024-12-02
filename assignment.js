//Convert an array ["name", "age", "location"] into an object where keys are the elements and the values are null.
// const arr = ["name", "age", "location"];
// const obj = Object.fromEntries(arr.map(key => [key, null]));
// console.log(obj);

// Transform an array of key-value pairs [["name", "John"], ["age", 25]] into an object.
// const arr = [["name", "John"], ["age", 25]];
// const obj = Object.fromEntries(arr);
// console.log(obj)

// Convert an array [1, 2, 3, 4] into an object where keys are the array indices and values are the elements.
// const arr = [1, 2, 3, 4];
// const obj = Object.fromEntries(arr.map((value, index) => [index, value]));
// console.log(obj);

// Take an array ["apple", "banana", "cherry"] and create an object where the keys are the elements and values are their lengths.
// const arr = ["apple", "banana", "cherry"];
// const obj = Object.fromEntries(arr.map((item) => [item, item.length]));
// console.log(obj);

// Convert an array of objects [{ id: 1 }, { id: 2 }] into an object with id as the key.
// const array = [{ id: 1 }, { id: 2 }];
// const obj = Object.fromEntries(array.map(item => [item.id, item]));
// console.log(obj);

// Convert an object { a: 1, b: 2, c: 3 } into an array of its values.
// const obj = { a: 1, b: 2, c: 3 };
// const arr = Object.values(obj);
// console.log(arr)

// Transform an object { x: 10, y: 20, z: 30 } into an array of its keys.
// const obj = { x: 10, y: 20, z: 30 };
// const arr = Object.keys(obj);
// console.log(arr)

// Convert an object { name: "John", age: 25 } into an array of key-value pairs.
// const obj = { name: "John", age: 25 };
// const arr = Object.entries(obj);
// console.log(arr)

// Take an object { 0: "a", 1: "b", 2: "c" } and turn it into an array of values.
// const obj = { 0: "a", 1: "b", 2: "c" };
// const arr = Object.values(obj);
// console.log(arr)

// Transform an object { a: 1, b: 2, c: 3 } into an array of objects where each key-value pair is an object.
// const obj = { a: 1, b: 2, c: 3 };
// const result = Object.entries(obj).map(([key, value]) => ({ [key]: value }));
// console.log(result);

// Convert a nested object { user: { name: "Alice", age: 30 } } into an array of its values.
// const obj =  { user: { name: "Alice", age: 30 } };
// const arr = Object.values(obj).flatMap(value => Object.values(value));
// console.log(arr)

// Flatten a deeply nested object { a: { b: { c: 1 } } } into an array of all values.
// const obj = { a: { b: { c: 1 } } };

// function flattenValues(obj) {
//   let values = [];

//   for (const key in obj) {
//     const value = obj[key];
//     if (typeof value === 'object' && value !== null) {
//       values = values.concat(flattenValues(value));
//     } else {
//       values.push(value);
//     }
//   }
//   return values;
// }
// const flattenedValues = flattenValues(obj);
// console.log(flattenedValues);

// Take a deeply nested object { name: { first: "John", last: "Doe" }, age: 25 } and convert it into an array of all leaf values.
// const obj = { name: { first: "John", last: "Doe" }, age: 25 };

// function getLeafValues(obj) {
//   let values = [];

//   for (const key in obj) {
//     const value = obj[key];
//     if (typeof value === 'object' && value !== null) {
//       values = values.concat(getLeafValues(value));
//     } else {
//       values.push(value);
//     }
//   }
//   return values;
// }
// const leafValues = getLeafValues(obj);
// console.log(leafValues);

// Extract all keys from a deeply nested object { x: { y: { z: 10 } } } into a single array.
// const obj = { x: { y: { z: 10 } } };

// function getAllKeys(obj) {
//   let keys = [];

//   for (const key in obj) {
//     keys.push(key);
//     const value = obj[key];
//     if (typeof value === "object" && value !== null) {
//       keys = keys.concat(getAllKeys(value));
//     }
//   }
//   return keys;
// }
// const allKeys = getAllKeys(obj);
// console.log(allKeys);

// Convert a deeply nested object { a: { b: 2 }, c: 3 } into an array of key-value pair objects.
// const obj = { a: { b: 2 }, c: 3 };

// function convertToKeyValueObjects(obj) {
//   let result = [];
  
//   for (const key in obj) {
//     const value = obj[key];
//     if (typeof value === 'object' && value !== null) {
//       result = result.concat(convertToKeyValueObjects(value).map(inner => ({ [`${key}.${Object.keys(inner)[0]}`]: inner[Object.keys(inner)[0]] })));
//     } else {
//       result.push({ [key]: value });
//     }
//   }
  
//   return result;
// }
// const keyValuePairObjects = convertToKeyValueObjects(obj);
// console.log(keyValuePairObjects);

// Convert an array of objects [ { id: 1, name: "John" }, { id: 2, name: "Doe" } ] into a single object with id as keys.
// const array = [ { id: 1, name: "John" }, { id: 2, name: "Doe" } ];
// const obj = array.reduce((acc, current) => {
//   acc[current.id] = current;
//   return acc;
// }, {});
// console.log(obj);

// Take a deeply nested object { data: { items: [1, 2, 3] } } and extract the array.
// const obj = { data: { items: [1, 2, 3] } };
// const itemsArray = obj.data.items;
// console.log(itemsArray);

// Convert an object { items: [1, 2], details: { a: 3, b: 4 } } into a flattened array of values.
// const obj = { items: [1, 2], details: { a: 3, b: 4 } };

// function flattenValues(obj) {
//   let values = [];

//   for (const key in obj) {
//     const value = obj[key];
    
//     if (typeof value === 'object' && value !== null) {
//       values = values.concat(flattenValues(value));
//     } else {
//       values.push(value);
//     }
//   }
//   return values;
// }
// const flattenedValues = flattenValues(obj);
// console.log(flattenedValues);

// Transform an array of objects [ { a: 1 }, { b: 2 } ] into an object where each key is an index.
// const array = [ { a: 1 }, { b: 2 } ];
// const obj = array.reduce((acc, current, index) => {
//   acc[index] = current;
//   return acc;
// }, {});
// console.log(obj);
