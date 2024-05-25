import { pow } from "./pow";

describe("pow", () => {
  test("to be 1", () => {
    expect(pow(1)).toBe(1);
  });

  test("to be pow", () => {
    expect(pow(2)).toBe(4);

    expect(pow(4)).toBeLessThan(34);
  });
});
