module.exports = function reverse(n) {
    const comm = /,/gi;
    const minus = /-/gi;
    const k = n.toString();
    
    if(n >= 0) {
    const newString = k.split("").reverse().join().replace(comm, '');
    return(newString);
    }
    if (n < 0) {
        const m = k.replace(minus, '');
        const newString = m.split("").reverse().join().replace(comm, '');
        return(newString);
    }
    
}
