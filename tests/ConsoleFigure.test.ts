import figures from "https://cdn.skypack.dev/figures@3.2.0?dts";
import { assertEquals } from "https://deno.land/std@0.107.0/testing/asserts.ts";
import { ConsoleFigure } from "../mod.ts";

const methods: string[] = Object.getOwnPropertyNames(ConsoleFigure.prototype);
const consoleFigure = new ConsoleFigure();

methods.map((method) => {
  if (method === "constructor") {
    return method;
  }

  Deno.test(`Altdx Console Figure - should render ${method}`, () => {
    if (method === "square") {
      assertEquals(figures.squareSmall, consoleFigure.square());

      return;
    }

    if (method === "squareFilled") {
      assertEquals(figures.squareSmallFilled, consoleFigure.squareFilled());

      return;
    }

    // @ts-ignore:
    assertEquals(figures[method], consoleFigure[method]());
  });

  return method;
});
