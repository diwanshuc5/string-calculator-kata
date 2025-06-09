import { add } from './StringCalculator';

//test: return 0 for empty string
test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number for single input', () => {
  expect(add("12")).toBe(12);
});

test('returns sum of two numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum of multiple numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('supports new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter with //;\\n', () => {
  expect(add("//;\n1;2;3")).toBe(6);
});

test('throws error on negative number', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
});

test('ignores numbers greater than 1000', () => {
  expect(add("1,2,1001,2000")).toBe(3);
});
