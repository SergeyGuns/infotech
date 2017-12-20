
Array.prototype.reduce2 = function (callback, initValue) {

  let arr = Object(this instanceof String ? object.split('') : this)
  let reducer;
  let len = arr.length
  if(initValue !== undefined) { 
    reducer = initValue;
    for(let i = 0; i < len; i++ ) {
      reducer = callback(reducer, arr[i])
    }
    return reducer;
  } else if ( typeof arr[0] === 'number' ) {
    reducer = 0
  } else if ( typeof arr[0] === 'object' ) {
    reducer = []
  }
  for (let i = 0; i < len; i++) {
    reducer = callback(reducer, arr[i]) 
  }
  return reducer;

};

var array = [1, 2, 3];
var result = array.reduce2(function (memo, item) {
  return item + memo;
});

console.log(`1. expects 6, result = ${result}`,result == 6);

var array = [1, 2, 3];
var result = array.reduce2(function (memo, item) {
  memo.push({ a: item });
  return memo; 
}, []);

console.log(`2. expects [{a:1}, {a:2}, {a:3}], result = ${JSON.stringify(result)}`, JSON.stringify(result) === JSON.stringify([{ a: 1 }, { a: 2 }, { a: 3 }]));

var array = [1, 2, 3];
var result = array.reduce2(function (memo, item) {
  return memo.concat(item);
}, "");

console.log(`3. expects "123", result = ${result}`, result === "123");

var array = [1, 2, 3];
var result = array.reduce2(function (memo, item) {
  return memo.concat(item * 2);
}, "");
console.log('4. ', result == "246");

var array = [1];
var result = array.reduce2(function (memo, item) {
  return memo + item * 2;
});

console.log(`5. ${result}`, result === 1);

var array = [1, 2, undefined, 3];
var result = array.reduce2(function (memo, item) {
  return memo + item;
});

console.log('6. ',isNaN(result));

var array = [1, 2, null, 3];
var result = array.reduce2(function (memo, item) {
  return memo + item;
});

console.log('7. ',result === 6);

var array = [[1], [2], [3]];
var result = array.reduce2(function (memo, item) {
  return memo.concat(item);
});

console.log('8. ', result);

var array = [];
var result = array.reduce2(function (memo, item) {
  return memo + item;
}, 1);

console.log('9. ', result === 1);