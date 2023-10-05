var isValid = (s) => {
    const map = new Map();
    map.set('[', ']');
    map.set('(', ')');
    map.set('{', '}');
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        }
        else if (stack.length === 0 || stack.pop() !== s[i]) {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid("{}"));