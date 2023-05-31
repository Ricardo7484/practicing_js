//fetch('https://httpbin.org/ip')
//    .then((resp) => resp.json())
//    .then((data) => {
//        console.log(data, data.name)
//    })
//    .catch((err) => {
//        console.warn(err)
//    })

fetch('https://httpbin.org/post', {     //Request
    method:'POST',
    body: 'name=Ricardo&age=21',
    headers: new Headers({'Content-type': 'application/x-www-form-urlencoded'})
})
.then((resp) => resp.json())    //Response
.then((data) => {
    console.log(data)
    console.log(data.origin)
    console.log(data.url)
    console.log(data.form.name)
    console.log(data.form.age)
})
.catch((err) => {
    console.warn(err)
})