//มี4 หรือ 6 หลัก และต้องเป็น number เท่านั้น

function validatePIN(pin) {
  for (let i = 0; i <= pin.length; i++) {
    return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin)
      ? true
      : false;
  }
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
