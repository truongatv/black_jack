

//variable
var bet = document.getElementById("bet");
var hit = document.getElementById("hit");
var stand = document.getElementById("stand");
var deal = document.getElementById("deal");
var money = document.getElementById("money");
var user_poker1 = document.getElementById("user-poke1");
var user_poker2 = document.getElementById("user-poke2");
var user_poker3 = document.getElementById("user-poker3");
var poker1 = document.getElementById("poke1");
var poker2 = document.getElementById("poke2");
var poker3 = document.getElementById("poker3");
var player_score = document.getElementById("playerTotal");
var dealer_score = document.getElementById("dealerTotal");
var hit = document.getElementById("hit");
var message = document.getElementById("message");
var more = document.getElementById("more");
var less = document.getElementById("less");
var list_poker = new Object();
list_poker.card = ["c01.png","c02.png","c03.png","c04.png","c05.png","c06.png","c07.png","c08.png","c09.png","c10.png","c11.png","c12.png","c13.png","d01.png","d02.png","d03.png","d04.png","d05.png","d06.png","d02.png","d08.png","d09.png","d10.png","d11.png","d12.png","d13.png","h01.png","h02.png","h03.png","h04.png","h05.png","h06.png","h07.png","h08.png","h09.png","h10.png","h11.png","h12.png","h13.png","s01.png","s02.png","s03.png","s04.png","s05.png","s06.png","s07.png","s08.png","s09.png","s10.png","s11.png","s12.png","s13.png"];
list_poker.score = [1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10];
var num;
var total = new Object();
total.player  = 0;
total.dealer = 0;
var poker2_src ; // store src of poker for show when end game
//hide poker 3 of dealer
poker3.style.display = "none";
var state; //value store win or lose

//handle event click button
more.addEventListener('click', function(){
    var bet_number = parseInt(bet.innerHTML) + 10;
    bet.innerHTML = bet_number;
})
less.addEventListener('click', function(){
    var bet_number = parseInt(bet.innerHTML) - 10 ;
    if(bet_number >= 0){
        bet.innerHTML = bet_number;
    }
})
start.addEventListener('click', function(){
    if(parseInt(bet.innerHTML) === 0){
        alert("your bet < 0");
    }
    else{
        hit.style.display = "inline-block";
        stand.style.display = "inline-block";
        start.style.display="none";
        // Random_poke(2,total);
        num = Math.floor(Math.random()*list_poker.card.length);
        user_poker1.src = "png/"+list_poker.card[num].toString();
        total.player = 0 + list_poker.score[num];
        list_poker.card.splice(num,1);
        list_poker.score.splice(num,1);
        num = Math.floor(Math.random()*list_poker.card.length);
        user_poker2.src = "png/"+list_poker.card[num].toString();
        total.player = total.player + list_poker.score[num];
        list_poker.card.splice(num,1);
        list_poker.score.splice(num,1);
        num = Math.floor(Math.random()*list_poker.card.length);
        poker1.src= "png/"+list_poker.card[num].toString();
        total.dealer = 0 + list_poker.score[num];
        list_poker.card.splice(num,1);
        list_poker.score.splice(num,1)
        num = Math.floor(Math.random()*list_poker.card.length);
        poker2_src = "png/"+list_poker.card[num].toString();
        poker2.src= "png/z01.png";
        total.dealer = total.dealer + list_poker.score[num];
        list_poker.card.splice(num,1);
        list_poker.score.splice(num,1);
        player_score.innerHTML = total.player;
        dealer_score.innerHTML = total.dealer;
        var test = 0;
    }
})

hit.addEventListener('click', function(){
    num = Math.floor(Math.random()*list_poker.card.length);
    total.player = total.player + list_poker.score[num];
    var new_card = document.createElement('img');
    new_card.src = "png/"+list_poker.card[num].toString();
    list_poker.card.splice(num,1);
    list_poker.score.splice(num,1);
    user_poker3.appendChild(new_card);
    player_score.innerHTML = total.player;
    if(Math.floor(((Math.random()*2)+1)) == 1){
        console.log(1);
        num = Math.floor(Math.random()*list_poker.card.length);
        total.dealer += list_poker.score[num];
        dealer_score.innerHTML = total.dealer;
        var new_card = document.createElement('img');
        new_card.src = "png/"+list_poker.card[num].toString();;
        poker3.appendChild(new_card);
        list_poker.card.splice(num,1);
        list_poker.score.splice(num,1);
    }
    if(total.player > 21 ){
        deal.style.display = "inline-block";
        message.innerHTML = "You Bust !";
        poker3.style.display = "inline-block";
        poker2.src = poker2_src;
        hit.style.display = stand.style.display = "none";
        start.style.display = "none";
        dealer_score.style.visibility = "visible";
        state = 0;
        // money.innerHTML = parseInt(money.innerHTML) - parseInt(bet.innerHTML);
    }
    if(total.player == 21){
        deal.style.display = "inline-block";
        message.innerHTML = "You Won !";
        poker3.style.display = "inline-block";
        poker2.src = poker2_src;
        hit.style.display = stand.style.display = "none";
        start.style.display = "none";
        dealer_score.style.visibility = "visible";
        state = 1;
    }
})

deal.addEventListener('click', function(){
    if(state == 0){
        console.log("test");
        money.innerHTML = parseInt(money.innerHTML) - parseInt(bet.innerHTML);
        return Reset_Game();
    }
    if(state == 1){
        money.innerHTML = parseInt(money.innerHTML) + parseInt(bet.innerHTML);
        return Reset_Game(list_poker.card, list_poker.score);
    }
})

stand.addEventListener('click', function(){
    var point = new Object();
    point.player = parseInt(player_score.innerHTML);
    point.dealer = parseInt(dealer_score.innerHTML);
    if(point.player>10){
        console.log("test");
        point.player = point.player - 10;
    }
    if(point.dealer > 10 && point.dealer < 21){
        point.dealer = point.dealer - 10;
    }
    if(point.player > point.dealer || point.dealer > 21){
        deal.style.display = "inline-block";
        message.innerHTML = "You Won !";
        poker3.style.display = "inline-block";
        poker2.src = poker2_src;
        hit.style.display = stand.style.display = "none";
        start.style.display = "none";
        dealer_score.style.visibility = "visible";
        state = 1;
    }
    else if(point.player < point.dealer || point.dealer == 21){
        deal.style.display = "inline-block";
        message.innerHTML = "You lose !";
        poker3.style.display = "inline-block";
        poker2.src = poker2_src;
        hit.style.display = stand.style.display = "none";
        start.style.display = "none";
        dealer_score.style.visibility = "visible";
        state = 0;
    }
})









//function
function Reset_Game(card, score){
    //reset list poker for player 
    user_poker1.src=user_poker2.src = "png/z02.png";
    poker1.src = poker2.src = "png/z01.png";
    poker3.innerHTML = "";
    poker3.style.display = "none";
    user_poker3.innerHTML ="";
    //set button to none
    hit.style.display = "<div class='btn' id='hit'>Hit</div>";
    stand.style.display = "<div class='btn' id='stand'>Stand</div>";
    start.style.display = "inline-block";
    deal.style.display = "none";
    bet.innerHTML = 0;
    player_score.innerHTML = 0;
    dealer_score.style.visibility = "hidden";
    list_poker.card = ["c01.png","c02.png","c03.png","c04.png","c05.png","c06.png","c07.png","c08.png","c09.png","c10.png","c11.png","c12.png","c13.png","d01.png","d02.png","d03.png","d04.png","d05.png","d06.png","d02.png","d08.png","d09.png","d10.png","d11.png","d12.png","d13.png","h01.png","h02.png","h03.png","h04.png","h05.png","h06.png","h07.png","h08.png","h09.png","h10.png","h11.png","h12.png","h13.png","s01.png","s02.png","s03.png","s04.png","s05.png","s06.png","s07.png","s08.png","s09.png","s10.png","s11.png","s12.png","s13.png"];
    list_poker.score = [1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10];
    
}