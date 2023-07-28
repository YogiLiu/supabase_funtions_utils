import {
  ConnInfo,
  Handler,
  serve,
  ServeInit,
} from "https://deno.land/std@0.168.0/http/server.ts";

/**
 * Default handler for unsupported methods.
 * @returns Default response.
 */
const defaultHandler: Handler = (_: Request) =>
  Promise.resolve(
    new Response(
      "Method not allowed",
      {
        status: 405,
      },
    ),
  );

class App {
  /**
   * Handlers for each HTTP method.
   */
  private handlers: Map<string, Handler> = new Map();

  /**
   * Register a handler for HEAD method.
   * @param handler Handler for HEAD method.
   */
  head(handler: Handler) {
    this.handlers.set("HEAD", handler);
  }

  /**
   * Register a handler for GET method.
   * @param handler Handler for GET method.
   */
  get(handler: Handler) {
    this.handlers.set("GET", handler);
  }

  /**
   * Register a handler for POST method.
   * @param handler Handler for POST method.
   */
  post(handler: Handler) {
    this.handlers.set("POST", handler);
  }

  /**
   * Register a handler for PUT method.
   * @param handler Handler for PUT method.
   */
  put(handler: Handler) {
    this.handlers.set("PUT", handler);
  }

  /**
   * Register a handler for PATCH method.
   * @param handler Handler for DELETE method.
   */
  delete(handler: Handler) {
    this.handlers.set("DELETE", handler);
  }

  /**
   * Serves HTTP requests.
   * @param options Options for `serve`.
   */
  serve(options?: ServeInit) {
    serve(
      async (req: Request, connInfo: ConnInfo) => {
        const method = req.method.toUpperCase();
        const handler = this.handlers.get(method) || defaultHandler;
        return await handler(req, connInfo);
      },
      options,
    );
  }
}

export { App };
