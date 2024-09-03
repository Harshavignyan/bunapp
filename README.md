# Bun HTTP Server with Custom Error Handling

This example demonstrates how to set up an HTTP server using Bun with custom error handling. The server processes incoming requests and provides specific responses based on the request path. Errors are caught and handled to return informative error messages to the client.

## Overview

- **Request Handling**: Processes incoming HTTP requests.
- **Error Handling**: Catches and formats errors to provide detailed responses.

## Code Example

```javascript
const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/feed") {
      throw new Error('Could not fetch feed');
    }

    return new Response("Error 404");
  },
  error(error) {
    return new Response(`<pre>${error.message} \n ${error.stack}</pre>`, {
      headers: {
        'Content-Type': 'text/html'
      }
    });
  }
});
```

## Explanation

### `fetch(req)`

- **Purpose**: Handles incoming HTTP requests and determines how to respond.
- **`const url = new URL(req.url);`**: Converts the request URL into a `URL` object for easy manipulation and inspection of URL components.
- **`if (url.pathname === "/feed")`**: Checks if the request path is `/feed`.
- **`throw new Error('Could not fetch feed');`**: Throws an error if the path is `/feed`. This error is caught by the `error` function.
- **`return new Response("Error 404");`**: Returns a 404 response for any other paths.

### `error(error)`

- **Purpose**: Handles errors thrown in the `fetch` handler and formats error responses.
- **`return new Response(`<pre>${error.message} \n ${error.stack}</pre>`, { ... });`**: Creates an HTML response that includes the error message and stack trace. This response format is useful for debugging.
- **`headers: { 'Content-Type': 'text/html' }`**: Sets the content type of the response to `text/html`, ensuring that the browser renders the error information correctly.

## Handling Errors

- **Throwing Errors**: Errors thrown in the `fetch` handler are caught by the `error` function.
- **Error Responses**: The `error` function formats the error message and stack trace in HTML and returns it as the response. This provides detailed error information which can be helpful for debugging purposes.

## Notes

- **Error Details**: Including detailed error information, such as stack traces, in production environments can be risky due to potential security implications. Consider providing user-friendly error messages instead of exposing internal details.
- **Custom Error Pages**: For a better user experience, customize error responses to be informative and aesthetically pleasing. Tailor error messages to be more user-friendly and avoid exposing sensitive internal information.

## Summary

This example illustrates how to set up an HTTP server in Bun with custom error handling. It processes incoming requests and provides specific responses based on the request path. If an error occurs, it is caught by the `error` function, which formats and returns a detailed HTML response containing the error details.

For more information on Bun and its features, visit the [official Bun documentation](https://bun.sh/docs).

---

Feel free to adjust the content to match the specific needs and conventions of your project!