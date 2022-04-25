// TASKS FOR LOOPS

// Решите эти задачи сначала через цикл while, а затем через цикл for.

//  Выведите столбец чисел от 1 до 100.
console.log(234564)
let count = 0
while (count <= 100) {
    console.log(count++)
}

for (let i = 0; i <= 100; i++) {
    console.log(i++)
}

//  Выведите столбец четных чисел в промежутке от 0 до 100.

let evenNumber = 0
while (evenNumber <= 100) {
    evenNumber++
    if (evenNumber % 2 == 0) {
        console.log(evenNumber)
    }
}

for (let i = 0; i <= 100; i++) {
    i % 2 == 0 && console.log(i, "for Loop")
}

// С помощью цикла найдите сумму чисел от 1 до 100.
let initialNumber = 0
while (initialNumber < 100) {
    let sum = initialNumber + initialNumber++
    console.log(sum, "sum")
}

//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], "arr")
}

// Дан массив с элементами[1, 2, 3, 4, 5].С помощью цикла for найдите сумму элементов этого массива.Запишите ее в переменную result.
const sumOfArr = [1, 2, 3, 4, 5]
for (let i = 0; i < sumOfArr.length; i++) {
    let result = sumOfArr[i] + i++
    console.log(result)


}
// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
const obj = { green: 'зеленый', red: 'красный', blue: 'голубой' }
for (let key in obj) {
    console.log(obj[key])
}
//  Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
const objSecnod = {
    "Kolya": "200",
    "Vasya": "300",
    "Petya": "400"
}

for (let key in objSecnod) {
    console.log(`${key} - salary is ${objSecnod[key]}`)
}

//  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
const arrayOfnumbers = [2, 5, 9, 10, 0, 4]
for (let i = 0; i < arrayOfnumbers.length; i++) {
    if (arrayOfnumbers[i] > 3 && arrayOfnumbers[i] < 10) {
        console.log(arrayOfnumbers[i], "great")
    }
}

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
const positiveNegativeNumber = [1, 5, -5, 9, -2]
let sum = 0
for (let i = 0; i < positiveNegativeNumber.length; i++) {
    if (positiveNegativeNumber[i] > 0) {
        sum += positiveNegativeNumber[i]
        console.log(sum, "sumOfPositiveNumbers")

    }
}
//  Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
const arrr = [1, 2, 5, 9, 13, 10]
for (let i = 0; i < arrr.length; i++) {
    if (arrr[i] === 4) {
        console.log("there is")
    }
}
//  Дан массив числами, например: [10, 20, 30, 50,5000, 235, 3000].Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

const findInTheArray = [10, 20, 30, 50, 5000, 235, 3000]

for (let i = 0; i < findInTheArray.length; i++) {
    const x = findInTheArray[i].toString()
    if (x.startsWith(5 || 1)) {
        console.log(findInTheArray[i], "sssss")
    }
}

//  Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
const xArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// option one not using loop
const joined = xArr.join(" - ")
console.log(joined, "joined")

// option 2 
for (let i = 0; i < xArr.length; i++) {
    console.log("-" + xArr[i])

}

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for (let i = 0; i < daysInWeek.length; i++) {
    if (daysInWeek[i] === "Sunday" || daysInWeek[i] === "Saturday") {
        console.log(daysInWeek[i])
    }
    else {
        console.log(daysInWeek[i], "other days")
    }
}
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
const daysInWeekSecond = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = new Date

for (let i = 0; i < daysInWeekSecond.length; i++) {
    if (i === date.getDay()) {
        console.log(`Today is ${daysInWeekSecond[i]}`)
    }

}
// Дано число n = 1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится ? Посчитайте количество итераций, необходимых для этого(итерация - это проход цикла), и запишите его в переменную num.

let n = 1000
while (n > 50) {
    let n = n / 2
    console.log("sum", n)

}
export const Tasks = () => {
    return (
        null
    )
}