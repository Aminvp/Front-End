const stocks = [
    {
        name: "Electric Khodro",
        price: 12912,
    },
    {
        name: "Iran Khodro",
        price: 15218,
    },
    {
        name: "Iran arghaam",
        price: 8853,
    },
    // ...
];


export function getHighestPrice(stocks) {
    let max = 0
    let name = ''
    if ( stocks == '') {
        return null
    }
    for (let i = 0; i < stocks.length ; i++) {
        if (stocks[i].price > max){
            max = stocks[i].price
            name = stocks[i].name
        }
    }
    return name
}

console.log(getHighestPrice(stocks)); // "Iran Khodro"

// ###################################
const stocks = [
	{
		name: "Electric Khodro",
		price: 12912,
	},
	{
		name: "Iran Khodro",
		price: 15218,
	},
	{
		name: "Iran arghaam",
		price: 8853,
	},
	// ...
];

export function getHighestPrice(stocks) {
	if (!stocks.length) {
		return null;
	}
	return [...stocks].sort((a, b) => b.price - a.price)[0].name;
}


