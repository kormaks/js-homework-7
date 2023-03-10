// task 1

// Реализовать функцию, которая составляет расписание

// В цикле спрашивать у пользователя задачу и время, на которое она запланирована. После получения данных, записываем их в объект расписания в формате время: задача
// Окно ввода prompt должно появляться до тех пор пока пользователь не нажмет Esc или кнопку Отмена.
// По окончании работы функция должна вернуть объект с расписанием.
// Вывести распиание в консоль.
// Результат должен иметь приблизительно такой вид:

// {
//   "10:00": "Подъем",
//   "10:15": "Зарядка",
//   "10:30 ": "Завтрак",
// }


const getTimetable = () => {
    let end = false;
    const result = {};
    do {
        const key = prompt("Введите время");
        const value = prompt("Введите задачу");
        if (!(key === null || key === "")) {
            result[key] = value;
            continue;
        } else {
            end = true;
        }
    } while (!end);
    console.log(result);
};
// getTimetable();


// task 2

// Написать функцию, которая находит сумму зарплат работников.

// На вход функция будет получать объект, где значениями в объекте являются СТРОКИ, содержащие размер заработной платы сотрудников компании.
// Необходимо посчитать сумму всех значений и вернуть ее.
// const salaries = {
//   John: "4300.00",
//   Ann: "5700.40",
//   Pete: "4900.95",
// };
// Результатом для данного объекта должно получится число 14901.35.
// Hint: работа с целыми числами более безопасна, чем с десятичными.


const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};
const getSalery = (object) => {
    let result = 0;
    for (key in object) {
        const employeeSalery = Number(object[key]);
        result += employeeSalery;
    }
    console.log(result.toFixed(2));
};
getSalery(salaries);