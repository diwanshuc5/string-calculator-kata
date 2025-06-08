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