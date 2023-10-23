/*
    Prefer not to use var because of issue in block scope and functionl scope
*/

const accountId = 144553
let accountEmail = "urvisha@gmail.com"
let accountState
var accountPassword = "abc@12345"
accountCity = "Jaipur"

//accountId = 2  // not allowed

accountEmail = "urvi@12345"
accountPassword = "23423421"
accountCity = "JND"

console.log(accountId)
console.table([accountEmail,accountPassword,accountCity,accountState])