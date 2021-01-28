const brackets = new Map();
brackets
    .set("(", ")")
    .set("[", "]")
    .set("{", "}");

const closingBrackets = Array.from(brackets.values());

function checkBracket(s: string) : boolean{
    const symbols = s.split('');
    const stack = [];
    for(let c of symbols) {

        if(!brackets.has(c) &&
        !closingBrackets.includes(c)){
            continue;
        }
        
	    if(brackets.has(c)) {
            stack.push(c);
            continue;
        }

        if(stack.length === 0)
            return false;
        
        let top = stack[stack.length - 1];

        if(brackets.get(top) !== c)
            return false;

        stack.pop();
	}
	return stack.length === 0;
}

function test(s: string = "") {
    let check : string = checkBracket(s.toString()) == true ?
    s + " VALID" : s + " INVALID";

    console.log(check);
}

test("abc");
test("(a + b)");
test("((a + b) + 123)");
test("((1+b)");
test(")a + b(");
test("())a + b(");
test("(a + b]");
test("())(");
test("{}()[]")
test("{)")