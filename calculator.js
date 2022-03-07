var number;
var result;
function insert(num){
    number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num; //concatenar com numero que foi clicado (clicou 5, depois 6 = 56)
}

function reset(){
    document.getElementById('result').innerHTML = '';
}

function clean(){
    result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calc(){
    result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }else{
        document.getElementById('result').innerHTML = "Digite algo!";
    }
}