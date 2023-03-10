const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html",
    })
    if (request.url == "/") {
        
        
        const data = fs.readFileSync(__dirname + "/index.html")
        console.log(data.toJSON());
        // response.write(html, "utf-8")
        response.write(data)
        response.end()
    } else if(request.url == "/product") {
        const html = `
        <html>
            <head>
                <meta charset="utf-8" />
            </head>
            <body>
                <h1>Product</h1>
            </body>
        </html>
        `
        response.write(html)
        response.end()
    }
    
})

server.listen(8000, () => {
    console.log("Server is running on port 8000");
})

