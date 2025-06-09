function isBalanced(expression) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };

  for (let char of expression) {
    if ('({['.includes(char)) {
      stack.push(char);
    } else if (')}]'.includes(char)) {
      if (!stack.length || stack.pop() !== pairs[char]) {
        return "Invalid";
      }
    }
  }

  return stack.length === 0 ? "Valid" : "Invalid";
}

// Dry runs:
console.log(isBalanced("(){}[]")); // Valid
console.log(isBalanced("({[})")); // Invalid

/*
Time: O(n)
Space: O(n)
*/
