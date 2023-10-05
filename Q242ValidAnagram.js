var isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    let sArray = Array.from(s).sort();
    let tArray = Array.from(t).sort();

    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] !== tArray[i]) {
            return false;
        }
    }
    return true;
};
console.log(isAnagram("anagram", "nagaram"));