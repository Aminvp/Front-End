function camelCase(str) {
    const text = str.trim().split(' ');
    let lst = []
    lst.push(text[0])
    for (let i = 1; i < text.length ; i++) {
        let chr = text[i].toLowerCase()
        let v = chr[0].toUpperCase()
        let v_new = v + chr.slice(1)
        lst.push(v_new)
    }
    return lst.join("")
}


export default camelCase;