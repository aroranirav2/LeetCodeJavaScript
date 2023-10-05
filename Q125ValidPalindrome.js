var isPalindrome = (s) => {
    let l = 0, r = s.length - 1;

    while (l < r) {
        if (!isAlphanumeric(s[l])) {
            l++;
            continue;
        }
        if (!isAlphanumeric(s[r])) {
            r--;
            continue;
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

let isAlphanumeric = (c) =>
    /^[a-zA-Z0-9]+$/.test(c);

console.log(isPalindrome("A man, a plan, a canal: Panama"));