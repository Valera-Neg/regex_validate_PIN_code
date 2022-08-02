function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
};

console.log(validatePIN("1")) // false
console.log(validatePIN("12")) // false
console.log(validatePIN("123")) // false
console.log(validatePIN("12345")) // false
console.log(validatePIN("1234567")) // false
console.log(validatePIN("-1234")) // false
console.log(validatePIN("1.234")) // false
console.log(validatePIN("-1.234")) // false
console.log(validatePIN("00000000")) // false
console.log(validatePIN("a234")) // false
console.log(validatePIN("1234" )) // true