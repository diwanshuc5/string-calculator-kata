import { add } from './StringCalculator';

//test: return 0 for empty string
test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number for single input', () => {
  expect(add("1")).toBe(1);
});