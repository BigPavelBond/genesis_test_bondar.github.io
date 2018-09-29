'use strict';

var HEADER__COLORS = ['#fc8950', '#fcc150', '#1da7c0'];
var ENTER_KEYCODE = 13;

var photoHeader = document.querySelector('.photo__header');
var photoImage = document.querySelector('.photo__image');
var choice = document.querySelector('.choice');
var choiceCircleOne = choice.querySelector('.choice__circle-one');
var choiceHeart = choice.querySelector('.choice__heart');
var start = document.querySelector('.start');
var startSecond = document.querySelector('.start-second');
var startBtn = start.querySelector('.start__btn');

//Второе окно
//Если происходит клик на кнопку "Начать", то переходим во второе окно
//Меняем цвет heder, choice
//Меняем цвет сердечка и блока
//Скрываем нижний контент предыдущего окна
//Показываем контент второго окна start-second

startBtn.addEventListener('click', function () {
  photoHeader.style.backgroundColor = HEADER__COLORS[0];
  photoImage.style.backgroundColor = HEADER__COLORS[0];
  choice.style.backgroundColor = HEADER__COLORS[0];
  choice.style.boxShadow = '0 -10px 50px 0' + HEADER__COLORS[0];
  choiceHeart.style.fill = HEADER__COLORS[0];
  choiceCircleOne.style.backgroundColor = HEADER__COLORS[0];
  start.style.display = "none";
  startSecond.style.display = "block";
});

//При клике или при нажатии ентер на "Вариант А" - аналигично для "Вариант Б" и "Вариант В"
//Показываем статистику photo-item и соответствующий ей процент
//Показываем кнопку "Продолжить"
//Уменьшаем padding-bottom для start-second

var photoItem = document.querySelector('.photo-item');
var photoItemOptionFirst = photoItem.querySelector('.photo-item__option-first');
var photoItemOptionSecond = photoItem.querySelector('.photo-item__option-second');
var photoItemOptionThird = photoItem.querySelector('.photo-item__option-third');
var startSecondBtnFirst = startSecond.querySelector('.start-second__btn-first');
var startSecondBtnSecond = startSecond.querySelector('.start-second__btn-second');
var startSecondBtnThird = startSecond.querySelector('.start-second__btn-third');
var startSecondBtnFourth = startSecond.querySelector('.start-second__btn-fourth');

//-----------------------------------

var buttonRemoveClickHandler = function () {
  photoItemOptionFirst.style.display = 'none';
  photoItemOptionSecond.style.display = 'none';
  photoItemOptionThird.style.display = 'none';
};

var buttonClickHandler = function (evt) {
  startSecondBtnFourth.style.display = 'block';
  startSecond.style.paddingBottom = '21px';
  photoItem.style.display = 'block';

  if (evt.target === startSecondBtnFirst) {
    buttonRemoveClickHandler();
    photoItemOptionFirst.style.display = 'block';
  } else if (evt.target === startSecondBtnSecond) {
    buttonRemoveClickHandler();
    photoItemOptionSecond.style.display = 'block';
  } else if (evt.target === startSecondBtnThird) {
    buttonRemoveClickHandler();
    photoItemOptionThird.style.display = 'block';
  }
};

startSecondBtnFirst.addEventListener('click', buttonClickHandler);
startSecondBtnSecond.addEventListener('click', buttonClickHandler);
startSecondBtnThird.addEventListener('click', buttonClickHandler);

//----------Конец универсального кода-------------------------

//При клике на кнопки удалять предыдущие события

//При клике на кнопку "Продолжить" открываем третье окно при условии, что один из вариантов выбран
//Скрываем статистику второго окна
//Меняем цвет heder, choice
//Меняем цвет сердечка и его блока
//Скрываем нижний контент второго блока

var startThird = document.querySelector('.start-third');

startSecondBtnFourth.addEventListener('click', function () {
  photoHeader.style.backgroundColor = HEADER__COLORS[1];
  photoImage.style.backgroundColor = HEADER__COLORS[1];
  choice.style.backgroundColor = HEADER__COLORS[1];
  choice.style.boxShadow = '0 -10px 50px 0' + HEADER__COLORS[1];
  choiceHeart.style.fill = HEADER__COLORS[1];
  choiceCircleOne.style.backgroundColor = HEADER__COLORS[1];
  photoItem.style.display = 'none';
  startSecond.style.display = "none";
  startThird.style.display = "block";
});

//При клике на "Вариант А" - аналигично для "Вариант Б"
//Показываем статистику photo-item и соответствующий ей процент
//Показываем кнопку "Продолжить"
//Уменьшаем padding-bottom для start-third

var photoItemSecond = document.querySelector('.photo-item-second');
var startThirdBtnFirst = startThird.querySelector('.start-third__btn-first');
var startThirdBtnSecond = startThird.querySelector('.start-third__btn-second');
var startThirdBtnThird = startThird.querySelector('.start-third__btn-third');
var photoItemSecondOptionFirst = photoItemSecond.querySelector('.photo-item-second__option-first');
var photoItemSecondOptionSecond = photoItemSecond.querySelector('.photo-item-second__option-second');

var startThirdRemoveButtonClickHandler = function () {
  photoItemSecondOptionFirst.style.display = 'none';
  photoItemSecondOptionSecond.style.display = 'none';
};

var startThirdButtonClickHandler = function (evt) {
  startThirdBtnThird.style.display = 'block';
  startThird.style.paddingBottom = '22px';
  photoItemSecond.style.display = 'block';

  if (evt.target === startThirdBtnFirst) {
    startThirdRemoveButtonClickHandler();
    photoItemSecondOptionFirst.style.display = 'block';
  } else if (evt.target === startThirdBtnSecond) {
    startThirdRemoveButtonClickHandler();
    photoItemSecondOptionSecond.style.display = 'block';
  }
};

startThirdBtnFirst.addEventListener('click', startThirdButtonClickHandler);
startThirdBtnSecond.addEventListener('click', startThirdButtonClickHandler);

//При клике на кнопку "Продолжить" открываем четвертое окно при условии, что один из вариантов выбран
//Скрываем статистику третьего окна
//Меняем цвет heder, choice
//Меняем цвет сердечка
//Скрываем нижний контент
//Показываем контент четвертого окна

var checkin = document.querySelector('.checkin');

startThirdBtnThird.addEventListener('click', function () {
  photoHeader.style.backgroundColor = HEADER__COLORS[2];
  photoImage.style.backgroundColor = HEADER__COLORS[2];
  choice.style.backgroundColor = HEADER__COLORS[2];
  choice.style.boxShadow =  '0 -10px 50px 0' + HEADER__COLORS[2];
  choiceHeart.style.fill = HEADER__COLORS[2];
  choiceCircleOne.style.backgroundColor = HEADER__COLORS[2];
  photoItemSecond.style.display = 'none';
  startThird.style.display = "none";
  checkin.style.display = "block";
  //Меняем расположение контента четвертого окна
  choice.style.top = '-96px';
  choice.style.left = '0px';
  checkin.style.top = '-96px';
  checkin.style.left = '0px';
  //Управляем кнопкой отправки
});

//Сделать отмеченной кнопку Вариант после нажатия (снимается выделение :active, если нажать на любую область лендинга)
//Сделать отмеченной кнопку Вариант и отправку результата вместе с формой регистрации при нажатии кнопки Продолжить
//В форме регистрации, если все обязательные поля не заполнены, поставить disabled кнопке Продолжить
//В форме регистрации сделать checkbox обязательным для отметки, иначе поставить disabled кнопке Продолжить
