//問１
for(var i=1; i<=5; i++) {
    document.write("★"); 
}
document.write("<br>");

document.write("<br>"); 
//問２
for(i = 0; i < 2; i++) {
  for(j = 0; j <= 2; j++) {
    document.write("★");
    if(j == 2){
      document.write("<br>");
    }
  }
}

document.write("<br>");
//問３
for(i = 0; i < 2; i++) {
  for(j = 0; j <= 4; j++) {
    document.write("☆");
    if(j == 4){
      document.write("<br>");
    }
  }
}

document.write("<br>");
//問４
for(i = 0; i <= 3; i++) {
    for(j = 0; j <= 4; j++) {
        document.write("★");
        if(j == 4) {
            document.write("<br>");
        }
    }
}

document.write("<br>");
//問５
for(i = 0; i <= 3; i++) {
    for(j = 0; j <= 2; j++) {
        document.write("★");
        if(j == 2) {
            document.write("<br>");
        }
    }
}

document.write("<br>");
//問６
var star1 = "★";
var star2 = "☆";

for(var a = 0; a < 3; a++) {
  document.write(star1 + star2 + star1);
  document.write("<br>");
  }

document.write("<br>");
//問７
for(i=1; i<=5; i++) {
  for(j=1; j<=5; j++) {
    if(j % 2 ==0) {
      document.write("☆");
    } else {
      document.write("★");
    }
  }
  document.write("<br>");
}

document.write("<br>");
//問８
for (var i = 1; i <= 5; i++) {
   for (var j = 0; j < i; j++)
   document.write ("★");
   document.write("<br>");
}

document.write("<br>");

//上級
//問１
for(var i = 1; i < 26; i++){
  if(i % 2 == 1){
    document.write("★");
  }else{
　  document.write("☆");
  }
  if(i % 5 == 0){
    document.write("<br>");
  }
}

document.write("<br>");
//問２
for(var i=1; i<=5; i++) {
  
  for(var j=1; j<=5; j++) {
   if(i == j) {
     document.write("☆");
   } else {
     document.write("★");
   }
  } 
  document.write("<br>");
}

document.write("<br>");
//問３
for (var i = 1; i <= 5; i++) {
   for (var j = 1; j <= i; j++){
     if(i == j){
       document.write("☆");
     } else {
       document.write("★");
     }
   }
   document.write("<br>");
}

document.write("<br>");
//関数
//問１
function menseki(hankei, enshu = 3.14) {
  return "半径" + hankei + "cmの円の面積は、" + hankei * hankei * enshu + "㎠です。";
}

document.write(menseki(5));
document.write("<br>");
document.write(menseki(7));
document.write("<br>");
document.write(menseki(10));

document.write("<br>");

document.write("<br>");
//問２
var adult = 500;
var child = 200;

function total(anumber,cnumber){
  return((adult*anumber) + (child*cnumber) + "円です。");
}
document.write(total(2,4) + "<br>");
document.write(total(1,5) + "<br>");
document.write(total(3,7) + "<br>");

document.write("<br>");