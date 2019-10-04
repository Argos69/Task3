const text = "01234567";

const substring = (text, pos = 0, len = text.length) => {
  if (len < 0) {
    len = 1;
  }
  if (len > (text.length - pos)) {
    len = text.length;
  }
  if (pos < 0) {
    pos = 0;
  }
  if (pos > text.length) {
    return result;
  }
  let result = "";
  for (pos; pos < len; pos++) {
    result += text[pos];
  }
  return result;
};

console.log(substring(text, 3, 48));