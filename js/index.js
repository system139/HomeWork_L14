/*
1*. Написать функцию, которая очищает строку от всех не буквенно-цифровых символов
Пример, "This., -/ is #! a ;: {} to $ % ^ & * book"; преобразуется "This is a book"
*/
/*
let str = "This., -/ is #! a ;: {} to $ % ^ & * book";

function remove_characters(str) {
    let = str.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    return let;
}

console.log(remove_characters(str));
 */

/*
2. Напишите функцию zeros(num, len), которая дополняется нулями до указанной длины
введенное числовое значение
Пример, zeros(12,8) ответ 00000012  Пример,  zeros(-3, 5) ответ -00003
 */

/*
function pad(number, length) {

    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }

    return str;
}
console.log('-' + pad(10,5));
console.log(pad(10,5));
 */
/*
3. Напишите функцию которая переводит введенную строку в верблюжий регистр (CamelCase)
Пример, "hello world" преобразуется "helloWorld"
*/
/*
str = "hello world";
function initCap(str) {
    return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(m) {
        return m.toUpperCase().replace(/\s+/g, "");
    });
};

console.log(initCap(str));
 */

/*
4*. Получить массив , элементы которого являются числами фибоначчи. Размер
массива (количество элементов) задает пользователь.
Для определения (вычисления) элемента создать функцию-рекурсию

 не доконца */

/*
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(8));
*/

/*
5. Создайте массив и отфильтруйте его, удалив все отрицательные и нулевые
элементы
 */
/*
let forDeletion = [-2, -4, -3]

let arr = [1, -2, 3, -4, 5, -3]

arr = arr.filter(item => !forDeletion.includes(item))

console.log(arr)
*/

/*
6*. Создайте классы Художник (имя, фамилия, контактные данные) и Картина
(название, год, техника выполнения, размеры).
Реализуйте методы для создания объектов. Реализуйте свойство количество
работ (у художника) и обновляйте его при добавлении новой работы.
Выведите информацию о художника, его работы и их количество.
P.S техника выполнения - акрил, масло, акварель, графика, другое

 */
/*
class Artist {
    constructor(name, surname, сontact, quantityWorks) {
        this.name = 'Nikola';
        this.surname = 'Nikalaevich';
        this.сontact = '+698712251222';
        this.quantityWorks = 20;
    }
}
let Nikola = new Artist('Nikola', 'Nikalaevich', '+698712251222', 20)

console.log(Nikola);

class Picture {
    constructor(title, year, execution, sizes) {
        this.title = 'Rainbow';
        this.year = '1995';
        this.execution = 'acrylic, butter, watercolor, graphics, other';
        this.sizes = '60×30';
    }
}
let rainbow = new Picture('Rainbow', '1995', 'acrylic, butter, watercolor, graphics, other', '60×30')

console.log(rainbow);
 */
/*

Работа с DOM

7. Создайте кнопку, которая подсчитывает количество нажатий на нее

смотри HTML
 */

function enter(elem){
    elem.value = parseInt(elem.value) + 1;
}
/*
8. Добавьте порядковый номер текстового абзаца в его начале при нажатии на кнопку
*/

function enter2(){
    let elements = document.getElementsByTagName('p');
    for (let i = 0; i < elements.length; i++){
        elements[i].innerHTML = i + '. ' + elements[i].innerHTML;
    }
}

/*
9. Даны дивы (<div>). По первому нажатию на каждый див он окрасится синим фоном, по второму красится
обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции:
одна красит в синий цвет, другая в зеленый например, и они сменяли друг друга через removeEventListener

 */

/*
10. Приложениеtodo (начатое в классе). Заметки организовать в список. При нажатии на кнопку
"Add" введенная заметка добавляется и отображается в перечне (списке)
/*
10** реализуйте добавление заметки в список с checkbox и кнопку “Delete”. Если пользователь отмечает
задачу и нажимает на кнопку удаления, задача удаляется и исчезает из списка
 */