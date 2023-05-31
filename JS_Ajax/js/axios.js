axios
    .get('https://httpbin.org/ip')
    .then((res) => {
        console.log('Response 1: ', res)
        console.log('Data => ', res.data)
        console.log('Origin: ', res.data.origin)
        console.log('Status: ', res.status)
        console.log('Status Text: ', res.statusText)
    })
    .catch((err) => {
        console.warn(err);
    })

axios
    .post('https://httpbin.org/post', {
        name: 'Ricardo',
        age: 38
    })
    .then((res) => {
        console.log('Response 2: ', res)
        console.log('Name: ', res.data.json.name)
        console.log('Age: ', res.data.json.age)
        console.log('Origin: ', res.data.origin)
        console.log('URL: ', res.data.url)
    })
    .catch((err) => {
        console.warn(err);
    })