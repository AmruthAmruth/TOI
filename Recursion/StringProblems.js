// ===============================
// 1️⃣ Reverse String
// ===============================
function reverseString(str) {
    if (str.length === 0) return "";
    return reverseString(str.slice(1)) + str[0];
}
console.log("Reverse 'hello':", reverseString("hello")); // "olleh"

// ===============================
// 2️⃣ Palindrome Check
// ===============================
function palindromeCheck(str, left = 0, right = str.length - 1) {
    if (left >= right) return true;
    if (str[left] !== str[right]) return false;
    return palindromeCheck(str, left + 1, right - 1);
}
console.log("Is 'mam' palindrome?", palindromeCheck("mam")); // true
console.log("Is 'hello' palindrome?", palindromeCheck("hello")); // false

// ===============================
// 3️⃣ Remove Specific Character (Using Result String)
// ===============================
function charFiltering(str, char, index = 0, result = "") {
    if (index === str.length) return result;
    if (str[index] !== char) result += str[index];
    return charFiltering(str, char, index + 1, result);
}
console.log("Remove 'a' from 'banana':", charFiltering("banana", "a")); // "bnn"

// ===============================
// 4️⃣ Remove Specific Character (Using Recursion Slice)
// ===============================
function removeChar(str, char) {
    if (str.length === 0) return "";
    let first = str[0];
    return (first !== char ? first : "") + removeChar(str.slice(1), char);
}
console.log("Remove 'a' from 'banana':", removeChar("banana", "a")); // "bnn"
