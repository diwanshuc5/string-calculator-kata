import { add } from './StringCalculator';

//test: return 0 for empty string
test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});