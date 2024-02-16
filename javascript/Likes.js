function likes(names) {
  let countNames = names.length
  if (countNames == 0 ) return "no one likes this"
  else if (countNames == 1) return `${names} likes this`
  else if (countNames == 2) return `${names[0]} and ${names[1]} like this`
  else if (countNames == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
  else return `${names[0]}, ${names[1]} and ${countNames - 2} others like this`
}

console.log(likes([]))
console.log(likes(["Peter"]))
console.log(likes(["Jacob", "Alex"]))
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
