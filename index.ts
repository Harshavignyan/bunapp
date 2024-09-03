// In Bun, you can handle HTTP requests and responses in 
// a manner similar to how you might in other JavaScript 
// environments that support Promises. This allows you to 
// perform asynchronous operations, such as forwarding requests 
// to another server or performing other asynchronous tasks 
// before sending a response.

import { sleep, serve } from "bun";

const server = serve({
    port: 3000,
    async fetch(req) {
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
        return new Response("Error 404");
    }
})

console.log(`Listening on PORT ${server.port}`)