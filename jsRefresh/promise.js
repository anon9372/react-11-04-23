// asyc functions
// it returns either resolved, reject or pending


// Example 1
// Creating a promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "AIT", topic: "AJAX" }
            resolve(data)
        }, 2000)
    })
}

// using the promise
fetchData()
    .then((data) => {
        console.log('Name:' + data.name)
        console.log('Topic:' + data.topic)
    })
    .catch((err) => console.log(err))

// Example 2

// Creating a promise
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        const sum = a + b
        if (sum % 2 === 0) {
            resolve(sum)
        }
        else {
            reject('Sum is Odd')
        }
    })
}
// Using the promise
add(2, 2)
    .then((result) => {
        console.log('Success' + result)
    })
    .catch((error) => {
        console.log('Error:' + error)
    })