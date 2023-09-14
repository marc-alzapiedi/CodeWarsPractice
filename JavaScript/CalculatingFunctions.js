// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(operand) {
    if (operand) {
     
        return Math.floor(eval(`0 ${operand} `))
    }

    return 0
}

function one(operand) {
    if (operand) {
        return Math.floor(eval(`1 ${operand} `))
    }                                                
    return 1
}

function two(operand) {
    if (operand) {
        return Math.floor(eval(`2 ${operand} `))
    }
    return 2
}

function three(operand) {
    if (operand) {
        return Math.floor(eval(`3 ${operand} `))
    }
    return 3
}

function four(operand) {
    if (operand) {
        return Math.floor(eval(`4 ${operand} `))
    }
    return 4
}

function five(operand) {
    if (operand) {
        return Math.floor(eval(`5 ${operand} `))
    }
    return 5
}

function six(operand) {
    if (operand) {
        return Math.floor(eval(`6 ${operand} `))
    }
    return 6
}

function seven(operand) {
    if (operand) {
        return Math.floor(eval(`7 ${operand} `))
    }
    return 7
}

function eight(operand) {
    if (operand) {
        return Math.floor(eval(`8 ${operand} `))
    }
    return 8
}

function nine(operand) {
    if (operand) {
        return Math.floor(eval(`9 ${operand} `))
    }
    return 9
}

function plus(num) {
    return `+ ${num}`
}

function minus(num) {
    return `- ${num}`
}

function times(num) {
    return `* ${num}`
}  

function dividedBy(num) {
    return `/ ${num}`
}


