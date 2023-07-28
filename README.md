## usage

```ts
import {
  App,
  response,
} from "https://deno.land/x/supabase_funtions_utils@v0.1.0/mod.ts";

const app = new App();

app.get(async (req: Request) => {
  return response.text("Hello, world!");
});

app.serve();
```
