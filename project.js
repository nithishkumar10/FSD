const inputs = document.querySelectorAll('input[type="button"]');
for(let input of inputs){
    if {
        input.addEventListener('click', Solve(input.value))
    }
    if(input.value === 'C'){
        input.addEventListener('click', clear)
    }
    else if(input.value === 'sin'){
        input.addEventListener('click', sine)
    }
    else if(input.value === 'cos'){
        input.addEventListener('click', cos);
        Result();
    }
    else if(input.value === 'tan'){
        input.addEventListener('click', tan)
    }
    else if(input.value === '='){
        input.addEventListener('click', Result)
    }
    else if(input.value === '<'){
        input.addEventListener('click', Back)

    }
    else if(input.value === 'root') {
        input.addEventListener('click', Squareroot);
    }

    

}
function Solve(val){
    var v=document.getElementById('#res');
    v.value+=val;
  }
function Result(){
    var num1=document.getElementById('res').value;
    var num2=eval(num1); 
    document.getElementById('res').value=num2;
  }

function clear() {
    const input = document.querySelector("#res");
    input.value = '';
}
function sine() {
    const v = document.querySelector('#res');
    v.value = Math.sin(eval(v.value))
}
function cos() {
    const v = document.querySelector('#res');
    v.value = Math.cos(eval(v.value))
}
function tan() {
    const v = document.querySelector('#res');
    v.value = Math.tan(eval(v.value))
}
function Back(){
	  var ev=document.getElementById('#res');
	  ev.value=ev.value.slice(0,-1);
	}

    function Squareroot(){
        var v=document.getElementById('#res');
        v.value=Math.sqrt(eval(v.value));
      }
function Power(){
        var v=document.getElementById('#res');
        v.value=Math.pow(eval(v.value),2);
}