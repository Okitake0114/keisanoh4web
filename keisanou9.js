function calc(){
    var elem1=parseFloat(document.getElementById('life1').textContent);
    var elem2=parseFloat(document.getElementById('life2').textContent);
    var elem3=parseFloat(document.getElementById('plus1').value);
    var elem4=parseFloat(document.getElementById('plus2').value);
    var elem5=parseFloat(document.getElementById('minus1').value);
    var elem6=parseFloat(document.getElementById('minus2').value);
    
    var newlife1=Number(elem1)+Number(elem3)-Number(elem5);
    var newlife2=Number(elem2)+Number(elem4)-Number(elem6);
    document.getElementById('life1').textContent=newlife1;
    document.getElementById('life2').textContent=newlife2;
    document.getElementById('plus1').value=0
    document.getElementById('plus2').value=0
    document.getElementById('minus1').value=0
    document.getElementById('minus2').value=0
    x=document.getElementById('life1').textContent
    y=document.getElementById('life2').textContent
    
    if(x<0){
        document.getElementById('life1').textContent='0';
        document.getElementById('button').style.display="none";
        document.getElementById("newbutton").style.display="inline-block"
        var name1=document.getElementById('name1').value;
        document.getElementById('why').textContent=name1+'の負け！';
        document.getElementById('comment').textContent='なんで負けたか明日までに考えといてください'

    }
    if(y<0){
        document.getElementById('life2').textContent='0';
        document.getElementById('button').style.display="none";
        document.getElementById("newbutton").style.display="inline-block"
        var name2=document.getElementById('name2').value;
        document.getElementById('why').textContent=name2+'の負け！';
        document.getElementById('comment').textContent='なんで負けたか明日までに考えといてください'
    }
}

function reset(){
    window.location.reload();
}
getdice6 = new Array(
    "img/6d1.gif",
    "img/6d2.gif",
    "img/6d3.gif",
    "img/6d4.gif",
    "img/6d5.gif",
    "img/6d6.gif");

count = 20; //点滅させる回数
mSec = 50; //点滅速度（1秒=1000）

function getDice1() {
    var dice1 = Math.floor(Math.random() * 6);
    document.getElementById("pic").src=getdice6[dice1];
    count--;
        if(count>=1) {tim=setTimeout("getDice1()",mSec);}
        if(count==0) {count=20;}
}

getcoin= new Array(
    "img/head.gif",
    "img/tail.gif");

function cointoss(){
    var coin1=Math.floor(Math.random()*2);
    document.getElementById("pic2").src=getcoin[coin1]
    count--;
        if(count>=1) {tim=setTimeout("cointoss()",mSec);}
        if(count==0) {count=20;}
}
