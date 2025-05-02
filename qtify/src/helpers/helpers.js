export function truncate(input, length = 19) {
    if(input.length > length) {
        return input.substring(0, length) + ("...");
    }
    return input;
}


// console.log(truncate("Crio.do is the best learning platform", 10));
