
# Bun HTTP Server Example

This example demonstrates how to set up an HTTP server using Bun and forward incoming requests to another server. It also shows how to handle and return responses from the forwarded server back to the client.

## Overview

- **`Bun.serve({...})`**: Initializes an HTTP server with the provided configuration.
- **`fetch(req)`**: The request handler function that processes incoming HTTP requests.
- **`fetch("https://example.com")`**: Forwards the incoming request to another server (`https://example.com`).
- **`await response.text()`**: Reads the response body from the forwarded request. Depending on the content type, you might use `response.json()` or other methods.
- **`new Response(...)`**: Constructs a new `Response` object to send back to the original client, including:
  - **Body**: The text content of the response from the forwarded server.
  - **Status**: The HTTP status code from the forwarded server’s response.
  - **Headers**: The headers from the forwarded server’s response.

## Code Example

```javascript
const server = Bun.serve({
  async fetch(req) {
    // Forward the request to another server
    const response = await fetch("https://example.com");
    
    // Return the response from the other server directly to the client
    return new Response(await response.text(), {
      status: response.status,
      headers: response.headers
    });
  },
});

console.log(`Server running on http://localhost:${server.port}`);
```

### Explanation

- **`Bun.serve({...})`**:
  - Starts an HTTP server with the configuration provided in the object.
  
- **`fetch(req)`**:
  - This is the handler function that processes incoming HTTP requests.

- **`fetch("https://example.com")`**:
  - Uses the `fetch` function to send the incoming request to another server. This is useful for proxying or forwarding requests.

- **`await response.text()`**:
  - Reads the response body from the forwarded request. You can use other methods like `response.json()` depending on the response format.

- **`new Response(...)`**:
  - Creates and returns a new `Response` object to the client, including the body, status, and headers from the forwarded server’s response.

### Asynchronous Handling

- **Promise-based Responses**:
  - Using `await` ensures that the `fetch` function waits for the response from `https://example.com` before sending the response back to the client. This allows efficient handling of asynchronous operations such as forwarding requests or interacting with external services.

### Notes

- **Error Handling**:
  - In a production environment, include error handling to manage scenarios where the external server might be unavailable or return an error response.

- **Headers and Status Codes**:
  - Ensure correct handling and passing through of HTTP headers and status codes, especially if proxying responses or dealing with cross-origin requests.

## Summary

This example shows how to set up a Bun HTTP server to forward requests and relay responses from another server. It utilizes Bun's support for asynchronous operations with modern JavaScript features like `async/await` to efficiently manage HTTP requests and responses.

For more information on Bun, visit the [official Bun documentation](https://bun.sh/docs).

---

Feel free to adjust the content or formatting according to your project's specific needs!