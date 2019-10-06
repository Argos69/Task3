//Функция apply принимает на вход 4 параметра в случае возведения числа в степень
//В остальных случаях 4-й параметр не будет учитываться
//count - количество раз, которое нужно применить функцию к аргументу
//func - функция применяемая к аргументу
//arg - аргумент функции
//exp - дополнительный аргумент(в случае умножения exp - степень) 


const apply = (count, func, arg, exp) => {
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
      arg = func(arg, exp);
      count -= 1;
    }
    return arg;
  }}
};

console.log(apply(3, Math.pow, 16, 2));
export default apply;