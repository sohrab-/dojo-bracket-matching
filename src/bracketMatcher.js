export function bracketMatches(input) {
  let open = ["(", "["];
  let close = [")", "]"];
  var stack = [];

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "(":
      case "[":
        stack.push(input[i]);
        break;
      case ")":
      case "]":
        if (stack.pop() !== "(") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
    }
  }

  return stack.length === 0;
}
