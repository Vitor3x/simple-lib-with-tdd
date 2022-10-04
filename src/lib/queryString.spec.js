import { describe, expect, it } from "vitest";
import { queryString } from "./queryString";

describe("Object to query setring", () => {
  it("should create a valid query string when an object is provided", () => {
    const obj = {
      name: "Vitor",
      profession: "developer",
    };

    expect(queryString(obj)).toBe("name=Vitor&profession=developer");
  });
});
