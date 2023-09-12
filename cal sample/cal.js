var _number1,_number2, _answer, _operators

function setScreen(num){


    if(document.getElementById('txtScreen').value != "0")
    {
        document.getElementById('txtScreen').value += num;
    }
    else
    {
        document.getElementById('txtScreen').value = num;
    }


    console.log(num);
}

function resrt()
{
    document.getElementById('txtScreen').value = "0";
}