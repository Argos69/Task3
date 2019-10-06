//count - количество раз, которое нужно применить функцию к аргументу
//func - функция применяемая к аргументу
//arg - аргумент функции


const apply = (count, func, arg) => {
  if (func === Math.sqrt && arg < 0) {
    arg = 'Невозможно извлечь корень из отрицательного числа';
    return arg;
  }
  else {
  if (count === 0){
    return arg;
  }
  else if (count < 0) {
    arg = 'Введите неотрицательный count(счетчик вызова функции)';
    return arg;
  }
  else {
    while(count > 0) {
      arg = func(arg);
      count -= 1;
    }
    return arg;
  }}
};

console.log(apply(3, Math.sqrt, 16));
export default apply;