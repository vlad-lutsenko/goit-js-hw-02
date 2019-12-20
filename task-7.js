"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let result;

const isLoginValid = function(login) {
  login.length >= 4 && login.length <= 16 ? (result = true) : (result = false);
  return result;
};

// console.log(isLoginValid("Poly"));

const isLoginUnique = function(allLogins, login) {
  allLogins.includes(login) ? (result = false) : (result = true);
  return result;
};
// console.log(isLoginUnique(logins, "Poly"));

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    result = "Логин успешно добавлен!";
  } else if (isLoginValid(login) === false) {
    result = "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (isLoginUnique(allLogins, login) === false) {
    result = "Такой логин уже используется!";
  }
  return result;
};
console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
