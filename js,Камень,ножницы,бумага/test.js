const arrGameTools = ["Камень", "Ножницы", "Бумага", "Kолодец"];

const objectResultGame = {
  pointIi: 0,
  pointUser: 0,
  generalPoint: {
    IiResult: 0,
    userResult: 0,
  },
};

const btnUse = document.getElementById("btn1");
btnUse.addEventListener("click", funcHodUser);

let hodComputer = 0;

function funcHodUser() {
  const hodUser = document.getElementById("input1").value;

  if (
    hodUser === "Камень" ||
    hodUser === "Бумага" ||
    hodUser === "Колодец" ||
    hodUser === "Ножницы"
  ) {
    console.log(hodUser);

    function funcHodComputer(arr) {
      const randomElemArr = Math.floor(Math.random() * arr.length);
      hodComputer = arr[randomElemArr];

      return console.log(hodComputer);
    }

    funcHodComputer(arrGameTools);
  } else {
    return console.log(
      "Принимаю только: |Камень|,|Ножницы|,|Бумага|,|Колодец|. Такой вариант - ",
      '"',
      "{ ",
      hodUser,
      " }",
      '"',
      "не подходит,давай еще раз"
    );
  }
  document.getElementById("input1").value = "";

  if (hodComputer === hodUser) {
    console.log("Упс,ничья. Поехали дальше!");
  } else {
    if (
      (hodUser === "Ножницы" && hodComputer === "Бумага") ||
      (hodUser === "Камень" && hodComputer === "Ножницы") ||
      (hodUser === "Бумага " && hodComputer === "Камень") ||
      (hodUser === "Колодец" && hodComputer === " Камень") ||
      (hodUser === "Колодец" && hodComputer === "ножницы")
    ) {
      ++objectResultGame.pointUser;
      console.log(objectResultGame);
    } else {
      ++objectResultGame.pointIi;
      console.log(objectResultGame);
    }

    if (objectResultGame.pointUser >= 5) {
      ++objectResultGame.generalPoint.userResult;
      console.log(
        "Раунд окончен со счетом: ",
        "Твой - ",
        objectResultGame.pointUser,
        "||",
        "Соперника - ",
        objectResultGame.pointIi,
        "Ты победил,молодец!"
      );
      objectResultGame.pointIi = 0;
      objectResultGame.pointUser = 0;
    }
    if (objectResultGame.pointIi >= 5) {
      ++objectResultGame.generalPoint.IiResult;

      console.log(
        "Раунд окончен со счетом:",
        "Ты - ",
        objectResultGame.pointUser,
        "||",
        "Соперник - ",
        objectResultGame.pointIi,
        "Ты  проиграл."
      );
      objectResultGame.pointIi = 0;
      objectResultGame.pointUser = 0;
    }
  }
  if (objectResultGame.generalPoint.userResult === 3) {
    console.log("На этот раз тебе повезло...Поздравляю, ты победил !");
  }
  if (objectResultGame.generalPoint.IiResult === 3) {
    console.log("Тебе снова не удалось одержать победу! Давай по новой ;)");
  }
}
