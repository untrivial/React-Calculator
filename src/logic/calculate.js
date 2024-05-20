import operate from "./operation";
export default function calculate(obj, buttonName) {
    if (buttonName === "AC") {
        return {
            cur: 0,
            last: null,
            operation: null,
            appendMode: false,
        };
    }

    if (buttonName === "+/-") {
        return {
            cur: -1 * obj.cur,
            last: obj.last,
            operation: obj.operation,
            appendMode: obj.appendMode,
        };
    }

    if (buttonName === "%") {
        return {
            cur: 0.01 * obj.cur,
            last: obj.last,
            operation: obj.operation,
            appendMode: false,
        };
    }

    if (!isNaN(buttonName)) {
        let l = obj.cur;
        if (obj.appendMode === false) {
            return {
                cur: buttonName,
                last: l,
                operation: obj.operation,
                appendMode: true,
            };
        } else {
            return {
                cur: obj.cur + buttonName,
                last: obj.last,
                operation: obj.operation,
                appendMode: true,
            };
        }
    }

    if (buttonName === ".") {
        let l = obj.cur;
        if (obj.appendMode === false) {
            return {
                cur: "0.",
                last: l,
                operation: obj.operation,
                appendMode: true,
            }
        } else {
            if (obj.cur.indexOf(".") === -1) {
                return {
                    cur: obj.cur + ".",
                    last: obj.last,
                    operation: obj.operation,
                    appendMode: true,
                }
            } else {
                return {
                    cur: obj.cur,
                    last: obj.last,
                    operation: obj.operation,
                    appendMode: obj.appendMode,
                }
            }
        }
    }

    if (buttonName === "+" 
        || buttonName === "-" 
        || buttonName === "x" 
        || buttonName === "/"
        || buttonName === "^") {
        if (obj.cur !== null && obj.last !== null && obj.operation !== null) {
            if (operate(obj.last, obj.cur, obj.operation) === "Error") {
                return {
                    cur: "Error",
                    last: null,
                    operation: null,
                    appendMode: false,
                };
            }
            return {
                cur: operate(obj.last, obj.cur, obj.operation),
                last: null,
                operation: buttonName,
                appendMode: false,
            };
        }
        return {
            cur: obj.cur,
            last: obj.last,
            operation: buttonName,
            appendMode: false,
        };
    }

    if (buttonName === "=") {
        if (obj.cur === "Error" || obj.last === "Error") {
            return {
                cur: "Error",
                last: null,
                operation: null,
                appendMode: false,
            };
        }
        if (obj.cur !== null && obj.last !== null && obj.operation !== null) {
            if (operate(obj.last, obj.cur, obj.operation) === "Error") {
                return {
                    cur: "Error",
                    last: null,
                    operation: null,
                    appendMode: false,
                };
            }
            return {
                cur: operate(obj.last, obj.cur, obj.operation),
                last: null,
                operation: null,
                appendMode: false,
            };
        }
    }
}
