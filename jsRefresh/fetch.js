const fetchData = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const data = res.json()
        console.log('data', data)
    }
    catch (err) {
        console.log(err)
    }
}

fetchData()