// debugger
// var a= 10
// let b=20
// debugger
// function greeting() {
//     debugger
//     let msg = "hiii"
//     function sayHi() {
//         debugger
//         console.log(msg)
//     }

//     return sayHi
// }
// debugger
// greeting()


debugger
var a = 10
let b = 20
const y = 15
debugger
// outer function
function outer() {
    debugger
    const c = a + b
//   inner funtion
    function inner() {
        debugger
        const z = c + 30 + a + b
        return z
    }

    return inner()
}
debugger
outer()
