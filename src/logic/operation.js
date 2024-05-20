export default function operate(n1, n2, operation) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (operation === "+") {
        return (num1 + num2).toString();
    }
    if (operation === "-") {
        return (num1 - num2).toString();
    }
    if (operation === "x") {
        return (num1 * num2).toString();
    }
    if (operation === "/") {
        if (num2 === 0) {
            return "Error";
        }
        return (num1 / num2).toString();
    }
    if (operation === "^") {
        return (num1 ** num2).toString();
    }
    throw Error(`Unknown operation '${operation}'`);
}
