// promise - обещание

function getUser() {
  setTimeout(() => {
    return "user!";
  }, 2000);
}
let user = getUser();

console.log(user);
// Для коррекктной обработки обещанных данных 
// в функции нужно создавать обещание этих данных
function getUserPromise() {
    // передаем два параметра на случай успешной обработки resolve
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("user!");
        }, 2000);
});
// кладем в пременную обещание, чтобы после обратиться к ней через then
const promise = getUserPromise();
// если распечатать promise без then мы не увидим данных, но увидим
// что в переременной лежит обещание их обработать
console.log(promise);
// Promise{<pending>}
// pending - ожидание
// resolve - успех, данные пришли
// reject - ошибка, данные отконенны. Не удалось обработать данные

// Мы обращаемся к перменной с promise
// через метод then и стрелочной функции
//
//promise.then(user => {
//    console.log(user);
//}
