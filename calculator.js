window.addEventListener('load',hide_preloader)
function hide_preloader(){
    document.getElementById("preloader").style.display="none";
    document.getElementById("nav").style.position="fixed";
}


const buttons = document.querySelectorAll('button');
let result = document.querySelector('.output');
let eqt = document.querySelector('.input');
let ans=0;

buttons.forEach((btn)=>{
    btn.addEventListener('click', calculate);
})

function calculate(){
    const button_text = this.innerText;
    if (button_text === 'sin' || button_text === 'cos' || button_text=== 'tan' || button_text === 'log' || button_text === 'ln'){
        eqt.innerText += button_text;
    }
    else if (button_text === '=') {
        if (eqt.innerText.substring(0,3) === 'sin'){
            result.innerText = Math.sin(eqt.innerText.slice(3)/180*3.141592653589793238462643383279502);
        }
        else if (eqt.innerText.substring(0,3) === 'cos'){
            result.innerText = Math.cos(eqt.innerText.slice(3)/180*3.141592653589793238462643383279502);
        } else if (eqt.innerText.substring(0,3) === 'tan'){
            result.innerText = Math.tan(eqt.innerText.slice(3)/180*3.141592653589793238462643383279502);
        } else if (eqt.innerText.substring(0,3) === 'log'){
            result.innerText = Math.log(eqt.innerText.slice(3));
        } else if (eqt.innerText.substring(0,2) === 'ln'){
            result.innerText = Math.log10(eqt.innerText.slice(2))*Math.LN10;
        } else if(eqt.innerText[0]==='√'){
            result.innerText = Math.sqrt(eqt.innerText.slice(1));
        }
        else{
            result.innerText = eval(eqt.innerText);
        }
        ans = result.innerText;
    } else if (button_text === 'AC') {
        eqt.innerText = '';
        result.innerText = 0;
    } else if (button_text === 'Del') {
        eqt.innerText = eqt.innerText.slice(0, -1);
    }
    else if(button_text === 'Ans'){
        eqt.innerText += ans;
    } else if(button_text === 'π'){
        eqt.innerText = Math.PI;
    }
    else {
        eqt.innerText += button_text;
    }
}