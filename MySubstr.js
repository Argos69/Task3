//text - вводимая строка
//pos - начальный индекс
//len - длина подстроки

const substr = (text, pos = 0, len = text.length) => {
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

console.log(substr('ADCAsAAdsdas', 3, 48));
export default substr;
