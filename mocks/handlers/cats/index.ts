import { rest } from "msw";

export const cats = [
  rest.get("https://store.cats/cats", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        cats: [
          {
            name: "patito",
            image: "string",
          },
        ],
      })
    );
  }),
];
