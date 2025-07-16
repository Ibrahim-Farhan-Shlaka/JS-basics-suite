let x, y, operator;
x = 0;
y = 0;
operator = 0;
secondNumber = false;

function setOperator(num){ 
    operator = num;
    secondNumber = true;  
    console.log(operator);
    switch(operator){
        case 0:
            document.getElementById("screenOperator").innerText = " + ";
            break;
        case 1:
            document.getElementById("screenOperator").innerText = " - ";
            break;
        case 2:
            document.getElementById("screenOperator").innerText = " x ";
            break;
        case 3:
            document.getElementById("screenOperator").innerText = " / ";
            break;
        case 4:
            document.getElementById("screenOperator").innerText = " ^ ";
            break;
        case 5:
            document.getElementById("screenOperator").innerText = " F -> C° ";
            document.getElementById("screenY").innerText = "";
            break;
        case 6:
            document.getElementById("screenOperator").innerText = " C° -> F ";
            document.getElementById("screenY").innerText = "";
            break;
        default:
            document.getElementById("screenOperator").innerText = "   ";
            break;
    }  
}

function execute(){
    switch(operator){
        case 0:
            sum();
            break;
        case 1:
            diff();
            break;
        case 2:
            mult();
            break;
        case 3:
            div();
            break;
        case 4:
            exp();
            break;
        case 5:
            toCelsius();
            break;
        case 6:
            toFahrenheit();
            break;
        default:
            sum();
            break;
    }
}

function setScreen(){
    document.getElementById("screenX").innerText = x;
    document.getElementById("screenY").innerText = y;
}

function sum(){
    let result = x + y;
    document.getElementById("screenResult").innerText = result;
    return result;
}

function diff(){
    let result = x - y;
    document.getElementById("screenResult").innerText = result;
    return result;
}

function mult(){
    let result = x * y;
    document.getElementById("screenResult").innerText = result;
    return result;
}

function div(){
    if(x == 0 || y == 0){
        document.getElementById("screenResult").innerText = "ERR";
        return null;
    }

    let result = x / y;
    document.getElementById("screenResult").innerText = result;
    return result;
}

function exp(){
    let result = Math.pow( x, y)
    document.getElementById("screenResult").innerText = result;
    return result;
}

function toCelsius(){
    let result = (5/9) * (x - 32);
    document.getElementById("screenResult").innerText = result;
    return result;
}

function toFahrenheit(){
    let result = (x * (9/5)) + 32;
    document.getElementById("screenResult").innerText = result;
    return result;
}

function setNumbers(num){
    if(secondNumber){
        y = (y*10) + num;
    } else {
        x = (x*10) + num;
    }
}

function Clear(){
    x = 0;
    y = 0;
    operator = 0;
    secondNumber = false;
    document.getElementById("screenX").innerText = "[ X ]";
    document.getElementById("screenOperator").innerText = "+";
    document.getElementById("screenY").innerText = "[ Y ]";
    document.getElementById("screenResult").innerText = "result";
}