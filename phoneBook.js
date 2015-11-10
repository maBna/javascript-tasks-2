'use strict';

var phoneBook = []; 

module.exports.add = function add(name, phone, email) {
var regExp = [];

var regExpTelephone= /^(\+?\d?\d?)?\s?((\(\d\d\d\))|(\d\d\d))\s?\d\d\d\s?\-?\d\s?\-?\d\d\d$/g;
var regExpEmail = /^[A-zА-я0-9\|/_=+.,"'!#$%&*?^`{}~-]*@[A-zА-я0-9\|/_=+.,"'!#$%&*?^`{}~-]*\.[A-zА-я][A-zА-я][A-zА-я]*\.?[A-zА-я]?[A-zА-я]?([A-zА-я]*)?$/g; //ник и хост могут иметь любой вид, а вот домен только 2 или 3 знака


if (regExpTelephone.test(phone) && regExpEmail.test(email)) {
     var subscriber = {
            name: name,
            phone: changePhone(phone), //добавляем уже отформатированный телефон
            email: email
        }
        phoneBook.push(subscriber);
    }
};

module.exports.find = function find(query) {
    var count = 0; //здесь храним число найденных элементов
	
	//Если в качестве запроса не подали ничего, то выводим всю коллекцию
    if (!query) {
        for (var i = 0; i < phoneBook.length; i++) {
            console.log(phoneBook[i]['name'] + ', ' + phoneBook[i]['phone'] + ', ' + phoneBook[i]['email']);
        }
    }
    else {
        //Иначе проверяем, есть ли запрос в одной из категорий
        for (var i = 0; i < phoneBook.length; i++) {
            if ((phoneBook[i]['name'].indexOf(query) != -1) || (phoneBook[i]['phone'].indexOf(query) != -1) || (phoneBook[i]['email'].indexOf(query) != -1)) {
                console.log(phoneBook[i]['name'] + ', ' + phoneBook[i]['phone'] + ', ' + phoneBook[i]['email']);
                count++;
            }
        }
	    console.log('По запросу '+ query + ' найдено ' + count + ' результат(а/ов)');
    }
};

module.exports.remove = function remove(query) {
    var count = 0; //здесь храним число удаленных элементов
    var i = 0; //счетчик
    
    while (i < phoneBook.length) {
	    //Если запрос есть в одной из категорий, удаляем запись
        if ((phoneBook[i]['name'].indexOf(query) != -1) || (phoneBook[i]['phone'].indexOf(query) != -1) || (phoneBook[i]['email'].indexOf(query) != -1)) {
            phoneBook.splice(i,1);
            count++;
        }
		//иначе просто увеличиваем счетчик
        else {
            i++;
        }
    }
    console.log('Удалено ' + count + ' контакт(а/ов)')
};

module.exports.present = function present() {
    console.log(phoneBook);
};

//функция форматированния телефона
var changePhone = function(phone) {
    phone = phone.replace(/[() +-]/g, ''); //сначала делаем строку только из цифр
	var length = phone.length; //запоминаем ее длину
	
	if (phone.substring(0, length - 10) != '') {
	    //Если есть 1 или 2 цифры в начале номера, то начинаем с конца добавлять нужные нам символы, вырезая кусочки, меду которыми вставляем символы, функцией substring
	    phone ='+' + phone.substring(0, length - 10) + ' (' + phone.substring(length - 10, length - 7) + ') ' + phone.substring(length - 7, length - 4) + '-' + phone.substring(length - 4,length - 3) + '-' + phone.substring(length - 3);
	}
	else {
	    //если нет, то добавляем в начало +7 и делаем то же самое
	    phone ='+7' + phone.substring(0, length - 10) + ' (' + phone.substring(length - 10, length - 7) + ') ' + phone.substring(length - 7, length - 4) + '-' + phone.substring(length - 4,length - 3) + '-' + phone.substring(length - 3);
	}
	return phone;
};
