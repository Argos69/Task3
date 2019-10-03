let word = "Radar  rAdAr";

const isPalindrome = (text, i = 0, j = text.length - 1) => {
    text = text.toUpperCase();
    text = text.split('');
    if ((i > j) || (i === j)) {
        return true;
    }
    else {
            if (text[i] === text[j]) {
            text = text.join('');
            i = i + 1;
            j = j - 1;
            return isPalindrome(text , i, j);
        }
        else {
            return false;
        }
    }
};

console.log(isPalindrome(word));
export default isPalindrome;

