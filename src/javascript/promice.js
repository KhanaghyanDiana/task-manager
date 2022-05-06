import { FunctionsComp } from "./functionsComp"

const func = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    }, 2000)

})
func.then(success => {
    // console.log(success, "sssss")
}).catch(err => {
    // console.log(err, "errror")
})


Promise.resolve("1")
    // Promise.resolve вернул "1"
    .then(data => {
        // console.log(data); // => "1"
    })

    // .then ничего не вернул
    .then(data => {
        // console.log(data); // => "undefined"
        return "2";
    })

    // .then вернул "2"
    .then(data => {
        console.log(data); // => "2"
    })


const controller = new AbortController()


const signal = controller.signal
const stoppedAction = () => {
    controller.abort()
    console.log("aborted")
}
// setTimeout(() => {
//     controller.abort()
//     console.log("aborted")
// }, 1000)
const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/", { signal })

        .then(res => {
            console.log(res, "resssssssss")
        })
        .then(success => console.log(success, "nested success"))
        .catch(error => {
            console.log(error, "nested err")
        })
        .catch(err => {
            console.log(err, "errro")
        })
}


const fetchedData = async () => {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos/")
        return await data.json()
    }
    catch (err) {
        throw err
    }


}

fetchedData()

// fetchedData().then(success => {
//     console.log(success, "success")
// })
const curry = u => i => u + i
curry(4)

const dreamBig = (db) => { return (db / 2) }
const dreamSmall = (ds) => { return (ds + 6) };
const dreamLittle = dl => dl.reduce((a, b) => a + b, 0)
// console.log(dl, "jjjjj")
//  dl.reduce((a, b) => a + b, 0)

// const result = dreamBig(dreamSmall(dreamLittle(4)));
// console.log(result, "0000000000000000000000");
const res = (...fn) => (val) => fn.reduceRight((prev, current) => current(prev), val)
// 1 => current - dreamLittle([1, 2, 3])
// 2 => dreamSmall(result of dream little)


const resultof = res(dreamBig, dreamSmall, dreamLittle)([1, 2, 3])
console.log(resultof, "888888888888888888888888")
let maximum = 0
let profit = 0
let arrayOfMin = []
const arr = (str) => {

    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j < str.length; j++) {

            let x = str[j] - str[i]
            let min = str[i] - str[j]
            let y = Math.sign(x)
            let t = Math.sign(min)
            if (y == 1) {
                maximum = str[j]
            }
            if (t === -1) {
                arrayOfMin.push(str[i])
            }


        }
        profit = maximum - Math.min(...arrayOfMin)
    }

    console.log(maximum, "max")
    console.log(arrayOfMin, "min")
    console.log(profit, "profit")

}

arr([3, 2, 25, 150, 3, 450000, 100000000, 5215220000000])
function myBio(one, two, three, gour, ...otherInfo) {
    console.log(otherInfo, "rest")
}
let user = ["Alberto", "Rodrigo", 25, "Male", ["Mr.John", "Samantha"]];
let [first, secont, third, four, [one, tow]] = user
console.log(one, "arrraauiuuuuu")
// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
// function myBio(firstName, lastName, company) {
//     console.log(`${firstName} ${lastName} runs ${company}`, "spread")
// }
const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe, "about");
console.log(...aboutMe[0], "spread")
const users = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
function userId({ displayName, id }) {
    console.log(displayName + id, "id");
}

console.log(userId(users)); // 42
// // Use spread to expand an array’s items into individual arguments:
// myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);
export const PromiceComp = () => {
    return (
        <>
            {/* <button onClick={fetchTodos}>Get</button>
            <button onClick={stoppedAction}>abort</button> */}
            <FunctionsComp />
        </>


    )
}
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

// Write your code below:
// const myExecutor = (resolve, reject) => {

//     if (inventory.sunglasses > 0) {
//         resolve('Sunglasses order processed.')
//     } else {
//         reject("That item is sold out")
//     }
// }
// let po = new Promise(myExecutor).then(success => {
//     console.log(success)
//         .catch(err => console.log(err))
// })
