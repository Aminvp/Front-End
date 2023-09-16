const n = 3
const row = []
for (let i = 1; i < n + 1; i++){
    for (let j = 1; j < n +1 ; j++){
        row.push(i * j)
    }
}
console.log(row)
// ######################################
const n = +readline();
for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++) {
        row.push(i * j);
    }
    console.log(row.join(" "));
}