const server = Bun.serve({
    port: 3000,
    fetch(req){
        return new Response("Hello World! From a server!!!")
    }
})

console.log(`Listening on PORT ${server.port}`)