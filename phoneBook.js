'use strict';

var phoneBook = new Array(); // Здесь вы храните записи как хотите

/*
   Функция добавления записи в телефонную книгу.
   На вход может прийти что угодно, будьте осторожны.
*/
module.exports.add = function add(name, phone, email) {

var regExpName = /\w*.*\w*.*\w*/;
var regExpTelephone = /.\d*.*\d\d\d.*\d*.\d.\d*/;
var regExpEmail = /\w*@\w*\.\w*/;


if ((name.match(regExpName) != null) && (phone.match(regExpTelephone) != null) && (email.match(regExpEmail) != null))
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
			console.log(phoneBook);
		}
		else
		{
			console.log('Po zaprosy '+ query + ' naydeno ' + count + ' resyltatov')
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
