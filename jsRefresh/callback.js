// CALLBACKS
// > used to handle async task
// > function passed to another function as an argument


// Parent function
function fetchData(callback) {

    setTimeout(() => {
        const data = { name: 'AIT', topic: 'AJAX' }
        callback(data)
    }, 2000)
}

// callback function
function processData(data) {
    console.log('Name:' + data.name)
    console.log('Topic:' + data.topic)
}

// calling the function
fetchData(processData)