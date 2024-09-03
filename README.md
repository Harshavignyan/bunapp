# bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

# Summary

This code sets up an HTTP server using Bun that handles requests by sleeping for 10 milliseconds and then responding with the duration of the sleep operation. The performance.now() method provides a high-resolution timestamp, which is useful for measuring short durations accurately.

When you run this server and make a request to it, the server will respond with a message indicating the time it took to "sleep", demonstrating the delay caused by the sleep function.

---

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
