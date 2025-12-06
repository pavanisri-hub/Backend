import http from 'http';

const server=http.createServer((req,res) => {
    // if(url=="/users"){
    //     res.writeHead(200,{"Content-type":"text/plain"}
    //         res.end("Here is the users page")
    //     )

    // }
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("Hi this Pavani From backend")
});

server.listen(3012,()=>{
    console.log(`Server runnning at: ${3012}`)
}
);
