/* Задача 1. Пакування товарів
 Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.
Функція оголошує два параметри:
обєкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. 
Тобто порахувати загальну кількість товарів в обєкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.
*/

function isEnoughCapacity(products, containerSize) {
  let sum = 0;
  for (const product of Object.values(products)) {
    sum += product;
    if (containerSize <= sum) {
      return false;
    }
  }
  return true;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
