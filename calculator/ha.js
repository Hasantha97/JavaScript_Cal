var _number1, _number2, _answer, _operators

function setScreen(num){

    if(document.getElementById('txtScreen').value != "0")
    {
        document.getElementById('txtScreen').value += num;
    }
    else
    {
        document.getElementById('txtScreen').value =num;
    }
    


    console.log(num);
}

function reset()
{
    document.getElementById('txtScreen').value = "0";
}

function setOperator(op){

    console.log(op);
    _number1 = document.getElementById('txtScreen').value;
    document.getElementById('txtScreen').value = "0";
    console.log("number01 :"+ _number1);
    
    _operators = op;
}

function getAnswer(){
    _number2 = document.getElementById('txtScreen').value;
    console.log("number2 :" + _number2);
    console.log("operators :" + _operators);
    if(_operators=='+')
    {
        _answer =Number (_number1) + Number(_number2);
    }
    else if(_operators=='-')
    {
        _answer =Number (_number1) -Number (_number2);
    }
    else if(_operators=='*')
    {
        _answer = Number(_number1) * Number(_number2);
    }
    else if(_operators=='/')
    {
        _answer =Number (_number1) / Number(_number2)
    }
    console.log("answer :" + _answer);
    document.getElementById('txtScreen').value = _answer;

}