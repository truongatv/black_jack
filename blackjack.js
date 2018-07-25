function Reset_Game(total){
    var hit = document.getElementById("hit");
    var stand = document.getElementById("stand");
    var start = document.getElementById("start");
    start.addEventListener(
        "click", function(){
            hit.style.display = "inline-block";
            stand.style.display = "inline-block";
            start.style.display="none";
            Random_poke(2,total);
        }
    )
}
//random poke function 
function Random_poke(count, total){
    var user_poker1 = document.getElementById("user-poke1");
    var user_poker2 = document.getElementById("user-poke2");
    var poker1 = document.getElementById("poke1");
    var poker2 = document.getElementById("poke2");
    var player_score = document.getElementById("playerTotal");
    var dealer_score = document.getElementById("dealerTotal");
    // console.log(user_poker1.src);
    var card = ["c01.png","c02.png","c03.png","c04.png","c05.png","c06.png","c07.png","c08.png","c09.png","c10.png","c11.png","c12.png","c13.png","d01.png","d02.png","d03.png","d04.png","d05.png","d06.png","d02.png","d08.png","d09.png","d10.png","d11.png","d12.png","d13.png","h01.png","h02.png","h03.png","h04.png","h05.png","h06.png","h07.png","h08.png","h09.png","h10.png","h11.png","h12.png","h13.png","s01.png","s02.png","s03.png","s04.png","s05.png","s06.png","s07.png","s08.png","s09.png","s10.png","s11.png","s12.png","s13.png","x01.png","x02.png"];
    var score = [1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10]
    var num = new Array();
    for(var i = 0; i<count*2; i++){
        num[i] = Math.floor(Math.random()*card.length);
    }
    user_poker1.src = "png/"+card[num[0]].toString();
    user_poker2.src = "png/"+card[num[1]].toString();
    poker1.src= "png/"+card[num[2]].toString();
    poker2.src= "png/z01.png"
    total[0] = score[num[0]]+score[num[1]];
    total[1] = score[num[2]]+score[num[3]];
    // console.log(total[1]);
    player_score.innerHTML = total[0];
    dealer_score.innerHTML = total[1];

}

function Start_Game(total){
    Reset_Game(total);
}
window.onload=function(){
    var total = new Array();
    var player_score = document.getElementById("playerTotal");
    var dealer_score = document.getElementById("dealerTotal");
    Start_Game(total);
    console.log(total[0]);
    console.log(total[1]);
}