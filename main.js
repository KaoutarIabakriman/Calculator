let display = document.getElementById('display') 
 function ClearAll() {
     display.value = ''
}

function ClearLast() {
    var currentDisplay = display.value;
    display.value = currentDisplay.slice(0, -1)
}

function AppendToDisplay(value) {
    if (value ==='(' || value ===')') {
        display.value += value;
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        var expression = display.value;
        if(isBalanced(expression)) {
            display.value = eval(expression)
        } else{
            display.value = 'Error: Unbalanced parentheses';
        }
    }catch (error) {
        display.value = 'Error';
    }
}

function isBalanced(expression) { //for every opening there is a corresponding closing parenthesis
    var countOpen = 0;//the number of opening the parentheses
    var countClose = 0;//the number of closing it
    for (var i =0; i < expression.length; i++) {
        if (expression[i] ==='('){
            countOpen ++;
        }else if (expression[i] ===')'){
            countClose++;
        }
    }
    return countOpen ===countClose
}

