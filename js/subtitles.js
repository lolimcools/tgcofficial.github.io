function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "Welcome.";
say[1] = "Hello!";
say[2] = "Since 2021!";
say[3] = "i watch u sleep";
say[4] = "1 + 1 = 3";
say[5] = "cats are cute, not dogs";
say[6] = "This took to long to make";
say[7] = "12345 is not a good password";
say[8] = "Made you look!";
say[9] = "Never gonna give you up, Never gonna let you down...";
say[10] = "yes i am changing this while u refresh...";
say[11] = "LOL";
say[12] = "got rizz?";
say[13] = "#Relatable";
say[14] = "Yooooooooooooooooooooo";
say[15] = "#tgc so cool";
say[16] = "he on x-games mode";
say[17] = "Sponsored by Honey!";
say[18] = "i wanted vbucks :(";
say[19] = "Some things are better left unspoken.";
say[20] = "pickle";
say[21] = "WOAH! ._.";
say[22] = "pretzels";
say[23] = "UwU";
say[24] = "amog us";
say[25] = "Ping: 1ms";
say[26] = "We have answers!";
say[27] = "i know were u live";
say[28] = "wat";
say[29] = "Welcome to the new update!!";
say[30] = "UPDATE!?!?!?";
say[31] = "Made with CSS and HTML!";
say[32] = "cringe ngl";
say[33] = "we know why ur here";
say[34] = "if u see this ur the chosen one";
say[35] = "AHHHHHHHHHHHHH";
say[36] = "100% Fresh!";
say[37] = "69";
say[38] = "relay remember!";
say[39] = "hi, good bye";
say[40] = "who tf uses light mode";
say[41] = "gei";
say[42] = "._.";
say[43] = "rabax";
say[44] = "mogus";
say[45] = "cats or dogs?";
say[46] = "CATS";
say[47] = "Too cool for school i see";
say[48] = "what a gaemer";
say[49] = "playing games in school huh?";
say[50] = "To the person who invented zero, thanks for nothing";
say[51] = "Wanna be my discord kitten?";
say[52] = "Best unblocked game site!";
say[53] = "Best paid game site!";
say[54] = "fart";
say[55] = "shrek is sooooooooooooooooooooooooooo hot";
say[56] = "u should go play the games now";
say[57] = "1+1 = 34";
say[58] = "v.5 is out!";
say[59] = "If you microwave your phone it will become faster!";
say[60] = "Welcome to my rad website";
say[61] = "coems 🤑";
say[62] = "Ok, and I know your address now!";
say[63] = "pop";
say[64] = "MERICAA RAHHH!!!!🦅🦅🦅";
say[65] = "open the noor";
say[66] = "SIUUUUUUUUUUUUUUUUUUUUU";
say[67] = "cap 🧢";
say[68] = "peanut";
say[69] = "this message is number 69";
say[70] = "90% bug free!";
say[71] = "🐧";







say[72] = "there are 71 of these messages!";


var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}
