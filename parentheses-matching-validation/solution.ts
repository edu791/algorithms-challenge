function isOpen(char: string): boolean {
    return ['(', '[', '{'].includes(char);
}

function isClosed(char: string): boolean {
    return [')', ']', '}'].includes(char);
}

function matches(char1: string, char2: string): boolean {
    const pairs: {[key: string]: string} = { '(': ')', '[': ']', '{': '}' };
    return pairs[char1] === char2;
}

function validateParentheses(text: string): boolean {
    const openingSymbolsStack: string[] = [];
    for (let i = 0; i < text.length; i++) {
        if (isOpen(text[i])) {
            openingSymbolsStack.push(text[i]);
        } else {
            if (isClosed(text[i]) && !matches(openingSymbolsStack.pop()!, text[i])) {
                return false;
            }
        }
    }
    return openingSymbolsStack.length === 0;
}

console.log(validateParentheses('({[]})')); // Should be true
console.log(validateParentheses('({[})')); // Should be false
console.log(validateParentheses('(){}[]')); // Should be true
console.log(validateParentheses('()[}[]')); // Should be false
console.log(validateParentheses('if (1 === 1) { return true; }')); // Should be true
console.log(validateParentheses('if (1 === 1 { return true; }')); // Should be false
console.log(validateParentheses('{{')); // Should be false
console.log(validateParentheses('}}')); // Should be false
