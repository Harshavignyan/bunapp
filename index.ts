// In Bun, when you use the fetch function with the
// serve method, you can access the server object as 
// the second argument in addition to the request object.
// This server object provides additional methods and 
// properties that can be useful for handling requests.

import { sleep, serve } from "bun";

const server = serve({
    port: 3000,
    async fetch(req, server) {
        const url = new URL(req.url);
        if (url.pathname === "/") {
            return new Response("Home Page!");
        }
        if (url.pathname === "/about") {
            return new Response("We are Tesseract Esports LLP!")
        }
        if (url.pathname === "/sleep") {
            const start = performance.now();  // Record the start time
            await sleep(10);                 // Sleep for 10 milliseconds
            const end = performance.now();    // Record the end time
            return new Response(`Slept for ${end - start}ms`);  // Respond with the elapsed time
        }
        if (url.pathname === "/promises") {
            // Forward the request to another server
            const response = await fetch("https://example.com");

            // Return the response from the other server directly to the client
            return new Response(await response.text(), {
                status: response.status,
                headers: response.headers
            });
        }
        if (url.pathname === "/fetchserver") {
            const ip = server.requestIP(req);
            return new Response(`Your IP is ${ip}`);
        }
        if (url.pathname === "/greet") {
            return new Response(Bun.file('./greet.txt'))
        }
        // handle Error
        if(url.pathname === "/feed"){
            throw new Error('Could not fetch feed')
        }
        return new Response("Error 404");
    },
    error(error){
        return new Response(`<pre> ${error} \n ${error.stack} </pre>`, {
            headers: {
                'Content-Type': 'text/html'
            }
        })
    }
})

console.log(`Listening on PORT ${server.port}`)