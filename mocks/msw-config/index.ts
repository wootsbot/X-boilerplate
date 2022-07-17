if (typeof window === "undefined") {
  const { server } = require("./server");
  server.listen();
} else {
  const { worker } = require("./browser");
  worker.start({
    serviceWorker: {
      // Specify the worker script URL relative to the _root_.
      url: "/mockServiceWorker.js",
      options: {
        // Override the scope to the root ("/").
        // By default, the worker is scoped to its location on your server,
        // which in this case would be prefix "/my-path".
        scope: "/",
      },
    },
  });
}

export {};
