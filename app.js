//bilgisayarın secimi
var choices = ["paper", "rock","scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];

var userPoint = 0;
var computerPoint = 0;

const score_div = document.getElementById("score");
const box = document.getElementById("challenge");
const userDiv = document.getElementById("yourObject");
const resultDiv = document.getElementById("result");
const resultP = document.getElementById("resultP");
const computerDiv = document.getElementById("comObject");

//score tabelasını her 50 ms de yenileme 
function score(){
    score_div.innerHTML = userPoint +" - "+ computerPoint;
}
setInterval(score, 50);

//choices dizisinden secilen string type'daki ögeleri oyunde görsel hale dönüştürme
function convert(word){
    if(word === "paper") return'<i class="fas fa-hand-paper"></i>';
    else if(word === "rock") return'<i class="fas fa-hand-rock"></i>';
    else  return '<i class="fas fa-hand-scissors"></i>';
}


function game(UserChoice){
    box.style.display = "inline-flex";//seçimlerin sonuclarının gösterilmesi

    //seçimlerin görsel sonuclara dönüştürülmesi
    userDiv.innerHTML = convert(UserChoice);
    computerDiv.innerHTML = convert(ComputerChoice);

    //oyuncunun kazandıgı, kaybettiği ve berabere kalınan durumların tespiti
    if( UserChoice === "paper" && ComputerChoice === "rock" || 
        UserChoice === "rock" && ComputerChoice === "scissors" ||
        UserChoice === "scissors" && ComputerChoice === "paper"){
         win(UserChoice)
    }
    else if( UserChoice === ComputerChoice){
        draw(UserChoice)
    }
    else{
        lose(UserChoice)
    }

    //bilgisayarın seçimlerinin her 1,8 s'de bir yenilenmesi
    function continueGame(){
        i = Math.floor(Math.random() * 3);
        ComputerChoice = choices[i];
        box.style.display = "none";
    }
    setTimeout(continueGame, 1800)

}

//kazanma durumu
function win(obj){
    userPoint++;
    resultP.innerHTML = "You win!";
    //oyuncunun seciminin kazandıgını daha belirgin hale getirmek icin "yesil" ,
    var obj = userDiv;
    obj.classList.remove("obj");
    obj.classList.add("green");

    //kaybedeni ise daha belirgin hale getirmek icin "kırmızı" buton haline getirilir
    var objCom = computerDiv;
    objCom.classList.remove("objCom");
    objCom.classList.add("red");

    //1,8 s sonra eski haline donusturulmesi
    setTimeout(() => {
        obj.classList.add("obj");
        obj.classList.remove("green");
        objCom.classList.add("objCom");
        objCom.classList.remove("red");
    },1800);

    

}

//beraberlik durumu
function draw(obj){
    resultP.innerHTML = "It's a Draw.";

    //beraberlik durumunda sonuclar "sarı" renkde gosterilir
    var obj = userDiv;
    obj.classList.remove("obj");
    obj.classList.add("yellow");

    var objCom = computerDiv;
    objCom.classList.remove("objCom");
    objCom.classList.add("yellow");

    setTimeout(() => {
        obj.classList.add("obj");
        obj.classList.remove("yellow");
        objCom.classList.add("objCom");
        objCom.classList.remove("yellow");
    },1800);
}

//kaybetme durumu
function lose(obj){
    computerPoint++;
    resultP.innerHTML = "You lose...";
    //kaybedeni daha belirgin hale getirmek icin "kırmızı" ,
    var obj = userDiv;
    obj.classList.remove("obj");
    obj.classList.add("red");

    //kazananın ise daha belirgin hale getirmek icin "yesil" buton haline getirilir
    var objCom = computerDiv;
    objCom.classList.remove("objCom");
    objCom.classList.add("green");

    setTimeout(() => {
        obj.classList.add("obj");
        obj.classList.remove("red");
        objCom.classList.add("objCom");
        objCom.classList.remove("green");
    },1800);
}