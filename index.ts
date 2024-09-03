// The fetch handler handles incoming requests. 
// It receives a Request object and returns a Response or 
// Promise<Response>.

const server = Bun.serve({
    port: 3000,
    fetch(req){
        const url = new URL(req.url);
        if (url.pathname === "/"){
            return new Response("Home Page!");
        }
        if (url.pathname === "/about"){
            return new Response("We are Tesseract Esports LLP!")
        }
        return new Response("Error 404");
    }
})

console.log(`Listening on PORT ${server.port}`)