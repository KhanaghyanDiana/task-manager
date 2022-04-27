import { FunctionsComp } from "./functionsComp"

const func = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success")
    }, 2000)

})
func.then(success => {
    console.log(success, "sssss")
}).catch(err => {
    console.log(err, "errror")
})


Promise.resolve("1")
    // Promise.resolve вернул "1"
    .then(data => {
        console.log(data); // => "1"
    })

    // .then ничего не вернул
    .then(data => {
        console.log(data); // => "undefined"
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


// const fetchedData = async () => {
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/todos/")
//         return await data.json()
//     }
//     catch (err) {
//         throw err
//     }


// }

// fetchedData()

// fetchedData().then(success => {
//     console.log(success, "success")
// })




export const PromiceComp = () => {
    return (
        <>
            <button onClick={fetchTodos}>Get</button>
            <button onClick={stoppedAction}>abort</button>
            <FunctionsComp />
        </>


    )
}