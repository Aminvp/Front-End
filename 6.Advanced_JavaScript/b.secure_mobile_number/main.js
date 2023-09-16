export function formatPhoneNumber(phoneNumber) {
    return // TODO: 
}
export function securePhoneNumbers(text) {
  const phoneNumberRegex = /09\d{9}/g;
  return text.replace(phoneNumberRegex, (match) => {
    const securedNumber = match.substr(0, 4) + "***" + match.substr(7);
    return securedNumber;
  });
}

// ################################

function secure(word) {
	const regex = /09[0-9]{9}/;
	if (regex.test(word)) {
		return word.slice(0, 4) + "***" + word.slice(7);
	}
	return word;
}

export function securePhoneNumbers(text) {
	// TODO:

	return String(text).split(" ").map(secure).join(" ");
}
