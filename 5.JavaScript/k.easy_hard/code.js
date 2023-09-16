export const solver = (text) => text.split(" ").filter((value, idx) => value % 6 == 0 && (idx + 1) % 6 == 0).join(" ")
// #########################

export const solver = (text) => String(text).split(" ").map((x) => +x).filter((v, i) => v % 6 === 0 && (i + 1) % 6 === 0).join(" ").trim()