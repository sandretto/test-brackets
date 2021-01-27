var openingBrackets = ['(', '[', '{'];
var closingBrackets = [')', ']', '}'];
function checkBracket(s) {
    var symbols = s.split('');
    var stack = [];
    for (var _i = 0, symbols_1 = symbols; _i < symbols_1.length; _i++) {
        var c = symbols_1[_i];
        if (!openingBrackets.includes(c) &&
            !closingBrackets.includes(c)) {
            continue;
        }
        if (openingBrackets.includes(c)) {
            stack.push(c);
            continue;
        }
        if (stack.length === 0)
            return false;
        var top_1 = stack[stack.length - 1];
        var i = openingBrackets.indexOf(c);
        if (c == openingBrackets[i] &&
            top_1 != closingBrackets[i])
            return false;
        stack.pop();
    }
    return stack.length === 0;
}
function test(s) {
    if (s === void 0) { s = ""; }
    var check = checkBracket(s.toString()) == true ?
        s + " VALID" : s + " INVALID";
    console.log(check);
}
test("abc");
test("(a + b)");
test("((a + b) + 123)");
test("((1+b)");
test(")a + b(");
test("())a + b(");
