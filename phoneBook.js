'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {

var regExpTelephone= /^(\+?\d?\d?)?\s?((\(\d\d\d\))|(\d\d\d))\s?\d\d\d\s?\-?\d\s?\-?\d\d\d$/g;
var regExpEmail = /^[A-zА-я0-9]*@[A-zА-я0-9]*\.[A-zА-я0-9][A-zА-я0-9][A-zА-я0-9]*\.?[A-zА-я0-9]?[A-zА-я0-9]?([A-zА-я0-9]*)?$/g;


if (regExpTelephone.test(phone) && regExpEmail.test(email))
{
	var subscriber = {
	name: name,
	phone: phone,
	email: email
	}
	phoneBook.push(subscriber);
}
    // Ваша невероятная магия здесь
};

/*
   Функция поиска записи в телефонную книгу.
   Поиск ведется по всем полям.
*/
module.exports.find = function find(query) {
	var count = 0;
	for (var i = 0; i < phoneBook.length; i++)
	{
		if (phoneBook[i]['name'].indexOf(query) != -1)
		{
			console.log(phoneBook[i]['name'] + ', ' + phoneBook[i]['phone'] + ', ' + phoneBook[i]['email']);
			count++;
		}
		else if (phoneBook[i]['phone'].indexOf(query) != -1)
		{
			console.log(phoneBook[i]['name'] + ', ' + phoneBook[i]['phone'] + ', ' + phoneBook[i]['email']);
			count++;
		}
		else if (phoneBook[i]['email'].indexOf(query) != -1)
		{
			console.log(phoneBook[i]['name'] + ', ' + phoneBook[i]['phone'] + ', ' + phoneBook[i]['email']);
			count++;
		}
	}
	if (!query)
		{
			for (var i = 0; i < phoneBook.length; i++)
				{
					console.log(phoneBook[i]['name'] + ', ' + phoneBook[i]['phone'] + ', ' + phoneBook[i]['email']);
				}
		}
		else
		{
			console.log('По запросу '+ query + ' найдено ' + count + ' результат(ов)')
		}
    // Ваша удивительная магия здесь

};

/*
   Функция удаления записи в телефонной книге.
*/
module.exports.remove = function remove(query) {
	var count = 0;
	var i = 0;
    // Ваша необьяснимая магия здесь
	while (i < phoneBook.length)
	{
		if (phoneBook[i]['name'].indexOf(query) != -1)
		{
			phoneBook.splice(i,1);
			count++;
		}
		else if (phoneBook[i]['phone'].indexOf(query) != -1)
		{
			phoneBook.splice(i,1);
			count++;
		}
		else if (phoneBook[i]['email'].indexOf(query) != -1)
		{
			phoneBook.splice(i,1);
			count++;
		}
		else
		{
			i++;
		}
	}
	console.log('Ydaleno ' + count + ' kontakt(ov)')
};

module.exports.present = function present() {
	console.log(phoneBook);
    // Ваша невероятная магия здесь
};
