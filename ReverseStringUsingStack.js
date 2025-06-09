function reverseString(str) {
  const stack = [];
  for (let ch of str) stack.push(ch);
  
  let reversed = "";
  while (stack.length) reversed += stack.pop();
  
  return reversed;
}

// Example usage:
console.log(reverseString("hello")); // olleh

/*
How it works:
- Stack is LIFO (Last In First Out)
- We push all characters then pop to reverse

Time: O(n), Space: O(n)
*/
