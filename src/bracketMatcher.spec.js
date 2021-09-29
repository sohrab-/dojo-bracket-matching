import assert from "assert";
import { bracketMatches } from "./bracketMatcher.js";

describe("bracketMatches", () => {
  // example of how to do write a unit test
  // TODO remove
  it("should hold universal truth", () => {
    assert.equal(2, 2, "The universe is broken");
  });

  it("no brackets should return true", () => {
    assert(bracketMatches("helloWorld"));
  });

  it("matching brackets should return true", () => {
    assert(bracketMatches("()"));
  });

  it("open bracket should return false", () => {
    assert(!bracketMatches("("));
  });

  it("closed bracket should return false", () => {
    assert(!bracketMatches(")"));
  });

  it("open square bracket should return false", () => {
    assert(!bracketMatches("["));
  });

  it("closed square bracket should return false", () => {
    assert(!bracketMatches("]"));
  });

  it("mix of brackets should return false", () => {
    assert(!bracketMatches("(]"));
  });

  it("multiple matching brackets should return true", () => {
    assert(bracketMatches("()[]"));
  });

  it("matching brackets with text inside should return true", () => {
    assert(bracketMatches("(helloworld)"));
  });

  it("multiple types of matching brackets should return true", () => {
    assert(bracketMatches("([])"));
  });
  it("closed followed by open square brackets should return false", () => {
    assert(!bracketMatches("]["));
  });
  it("closed followed by open round brackets should return false", () => {
    assert(!bracketMatches(")("));
  });
  it("multiple types of matching brackets should return false", () => {
    assert(!bracketMatches("([)]"));
  });
  it("empty string should return true", () => {
    assert(bracketMatches(""));
  });
});
