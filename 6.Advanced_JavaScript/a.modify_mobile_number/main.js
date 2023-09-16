function getAreaFunctions(shapes) {
	// TODO: Implement
}

// DO NOT REMOVE NEXT LINE!
export default getAreaFunctions;

export function formatPhoneNumber(phoneNumber) { 
    const reg = /^09[0-9]{9}/; 
    if ( reg.test(phoneNumber) ) {
        let res = phoneNumber.slice(1)
        res = '+98' + res
        return res
    }
    else {
        return null
    }
    
}

// #############################

export function formatPhoneNumber(phoneNumber) {
	return String(phoneNumber).startsWith("09")
		? "+98" + String(phoneNumber).slice(1)
		: null;
}
