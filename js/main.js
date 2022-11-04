// Salvando o caminho dos botoes nas variaveis para facilitar o uso.

const bInit = document.querySelector(".bInit");
const bStop = document.querySelector(".bStop");
const bReset = document.querySelector(".bReset");
const timer = document.querySelector(".timer");

// Variavel usada.

var sec = 0;
var min = 0;
var hor = 0;
var isOn = 0;
var contador

// botoes.

bInit.addEventListener("click", () => {
    if(isOn == 0){
        isOn=1
        contador = setInterval(secAdd, 1000);
    } else {
        reset()
    }
});

bStop.addEventListener("click", () => {
    clearInterval(contador)
    isOn=0
});

bReset.addEventListener("click", () => {
    reset()
    clearInterval(contador)
    isOn=0
});

//lógica do relógio.

function secAdd(){
    sec++
    if(sec == 60){
        min++;
        sec = 0;
    }
    if(min== 60){
        hor++
        min = 0;
    }

    if(sec < 10){
        if(min < 10){
            timer.innerHTML = (`${hor}:0${min}:0${sec}`)
        } else (
            timer.innerHTML = (`${hor}:${min}:0${sec}`)
        )
    } else {
        if(min < 10){
            timer.innerHTML = (`${hor}:0${min}:${sec}`)
        } else (
            timer.innerHTML = (`${hor}:${min}:${sec}`)
        )
    }

};

// zera o relógio

function reset(){
    sec=00
    min=00
    hor=00
    timer.innerHTML = "0:00:00"
}

