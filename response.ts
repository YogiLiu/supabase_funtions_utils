const response = {
  /**
   * create a text response
   * @param text text content
   * @param status status code
   * @returns test response
   */
  text: (text: string, status = 200) =>
    new Response(text, {
      status: status,
      headers: {
        "Content-Type": "text/plain",
      },
    }),

  /**
   * create a json response
   * @param json json object
   * @param status status code
   * @returns json response
   */
  // deno-lint-ignore no-explicit-any
  json: (json: any, status = 200) =>
    new Response(JSON.stringify(json), {
      status: status,
      headers: {
        "Content-Type": "application/json",
      },
    }),
};

export { response };
