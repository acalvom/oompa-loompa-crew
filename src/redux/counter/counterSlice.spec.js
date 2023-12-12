import { expect, test, describe } from 'vitest'

import counterSlice, { initialState, increment, decrement } from "./counterSlice";

describe("tests for counterSlice", () => {
  test("initialize slice with initialValue", () => {
    const counterSliceInit = counterSlice(initialState, { type: "unknown" });
    expect(counterSliceInit).toBe(initialState);
  });

  test("increment +1 to the counter", () => {
    const counter = counterSlice(initialState, increment());
    expect(counter.value).toBe(1);
  });

  test("decrement -1 to the counter", () => {
    const counter = counterSlice(initialState, decrement());
    expect(counter.value).toBe(-1);
  });
});