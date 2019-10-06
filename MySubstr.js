//text - проверяемый текст

const isPalindrome = (text) => {
  text = text.toUpperCase();
  if (text.length <= 1) {
    return true;
  }
  
  if (text[0] !== text[text.length - 1]) {
    return false;
  }
  else {
    text = text.substr(1, text.length - 2);
    return isPalindrome(text);
  }
};

console.log(isPalindrome(' .Faf. '));
//export default isPalindrome;
