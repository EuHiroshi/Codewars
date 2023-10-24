// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript

// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

// This is the second kata in series:

// Find the unique number
// Find the unique string (this kata)
// Find The Unique

function findUniq(arr) {
  let newArray = arr.map((a) => {
    return [...new Set(a.toLowerCase())].sort().join("") // O new Set() serve para tirar valores repetidos de uma array;
  })
  for (let i = 0; i < newArray.length; i++) {
    if (newArray.indexOf(newArray[i]) === newArray.lastIndexOf(newArray[i]))
      return arr[i]
  }
}

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])); //  bbbb
console.log(findUniq(["o", "p", "p"])); // o
console.log(
  findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"])
);
