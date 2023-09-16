const [x, y] = readline().split(" ").map(n => +n);
const [x1, y1] = readline().split(" ").map(n => +n);

if (x < x1){
    console.log('Right');
} else{
    console.log('Left');
}

const [x, y] = readline().split(" ").map(n => +n);
const [x1, y1] = readline().split(" ").map(n => +n);
// ###########################################################
if (x1 < x) {
    console.log("Left");
} else {
    console.log("Right");
}

/*
// SIMPLER SYNTAX
console.log(x1 < x ? "Left" : "Right");
*/