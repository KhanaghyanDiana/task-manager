// functions 

// Переверните число задом наперед
function reverse_a_number(n) {
    // console.log(Number(n.toString().split("").reverse().join("")), "reverse");
}
reverse_a_number(154)

//  Проверьте, является ли переданная строка палиндромом или нет
function check_Palindrome(str_entry) {
    let numToarr = Array.from(str_entry)
    for (let i = 1; i < numToarr.length; i++) {

        let length = numToarr.length - 1
        // console.log(numToarr[length], ":last")
        // console.log(numToarr[0], ":first")
        if (numToarr[0] === numToarr[length]) {
            // console.log("polidrome")
        } else {
            // console.log("no")
        }
    }
}
check_Palindrome('topot555555')
// check_Palindrome('level')
// 4. Вернуть переданную строку с буквами в алфавитном порядке


function alphabet_order(str) {

    const convertArr = Array.from(str)
    // console.log(convertArr.sort().join(""), "convert")

}

alphabet_order("alphabetical")

// Найти самое длинное слово в строке

function find_longest_word(str) {
    const arr = []
    const con = str.split(" ")
    con.map(item => {
        arr.push(item.length)

    })
    const x = Math.max(...arr)
    // console.log(x, "longesrt word length")
    //  11 === longest word length
    // console.log(str.split(" ").sort(), "55555555555555")

    //    get the longest word

}

find_longest_word('Web Development Tutorial')

//  Получить тип данных
function detect_data_type(value) {
    // console.log(typeof (value))
};

document.writeln(detect_data_type(7)); // number 
document.writeln(detect_data_type('wm-school')); // string 
document.writeln(detect_data_type(false)); // boolean

// function vowel_count(str1) {

//     // Ваш код

// }

// vowel_count('Web Development Tutorial')
let message = 'I am a Happy Go lucky Guy';
// console.log(message.split('', 4), "split limit"); // ["I", "am", "a", "Happy"]
function drawChart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 }) {
    // console.log(size, coords, radius, "test");
    // do some chart drawing
}

drawChart({
    coords: { x: 18, y: 30 },
    radius: 30
});



function callSomething(thing = something()) {
    return thing;
}

let numberOfTimesCalled = 0;
function something() {
    numberOfTimesCalled += 1;
    return numberOfTimesCalled;
}
export const FunctionsComp = () => {
    return null
}