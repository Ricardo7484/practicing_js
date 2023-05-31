let xhttp = new XMLHttpRequest()

//xhttp.open('GET', 'http://httpbin.org/ip', true)
//xhttp.send()

xhttp.open('POST', 'https://httpbin.org/post', true)
xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xhttp.send('name=Ricardo&age=38')

xhttp.onreadystatechange = function() {
    if ( this.readyState == 4 && this.status == 200 ) {
        console.log(JSON.parse(this.response))
    }
}