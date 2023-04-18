const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "AIT", topic: "AJAX" }
            resolve(data)
        }, 2000)
    })
}

const displayData = async () => {
    try {
        const data = await fetchData()
        console.log("Name:" + data.name)
        console.log("Topic:" + data.topic)
    }
    catch (err) {
        console.log(err)
    }
}

displayData()