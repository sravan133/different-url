const http=require("http")
const server=http.createServer((req,res)=>{
    const url=req.url
    if(url==="/home"){
        res.write("Welcome Home")
        res.end()
    }
    else if(url==="/about"){
        res.write("About us Page")
        res.end()
    }
    else if(url==="/node"){
        res.write("Welcome to Node Js Project")
        res.end()
    }

    })
    

server.listen(5000)