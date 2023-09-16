const input = readline().split("");
let R = 0
let Y = 0
let G = 0
for (let i = 0; i < input.length; i++){
    if (input[i] == 'G'){
        G += 1
    }else if (input[i] == 'Y'){
        Y += 1
    }else {
        R += 1
    }
}

if ((R >= 3) || (Y >= 2 && R >= 2) || (G == 0)){
    console.log('nakhor lite')
}else {
    console.log('rahat baash')
}
// ####################################
const label = readline();
let R = 0, Y = 0, G = 0;
for (let i = 0; i < 5; i++) {
    const l = label[i];
    if (l === "R") R++;
    if (l === "Y") Y++;
    if (l === "G") G++;
}
const danger = (R >= 3) || (R >= 2 && Y >= 2) || (G === 0);
console.log(danger ? "nakhor lite" : "rahat baash");