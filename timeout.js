// Асинхронный код vs синхронный код

console.log("Hello!");
//Пример асинхронного кода, который выполнится через 1 секунду
// принимает 1 - функцию, 2- задержка
// ! Любой асинхронный код сработает после синхронного, даже если задержка 0 сек

setTimeout(() => {
  console.log("World!");
}, 500);

console.log("apple");
setTimeout(() => {
  console.log("banana");
}, 0);
//создайте функцию clapHands()
// чтобы она через 2 секунды вывела в консоль "Clap!"
// а через 7 секунд вывела "Bravo!"

function clapHands() {
  setTimeout(() => {
    console.log("Clap!");
  }, 2000);
  setTimeout(() => {
    console.log("Bravo!");
  }, 7000);
}

clapHands();
