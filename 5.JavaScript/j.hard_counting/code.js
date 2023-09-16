export function solver(n) {
	const str = n.toString(2)
	let count = 0
	for (let i = 0; i < str.length; i++) {
		 if (str[i] == '1') {
			 count += 1
		 }
	}
    return count
}
// ###########################################
export function solver(n) {
	return (+n)
		.toString(2)
		.split("")
		.filter((c) => c === "1").length;
}
