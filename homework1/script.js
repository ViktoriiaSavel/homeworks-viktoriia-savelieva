let string = 'some test string'
		
		//1 Получить первую и последнюю буквы строки
		console.log(string[0]);

		console.log(string[string.length-1]);

		//2 Сделать первую и последнюю буквы в верхнем регистре
		console.log(string[0].toUpperCase());
		console.log(string[string.length-1].toUpperCase());

		//3 Найти положение слова ‘string’ в строке
		console.log(string.indexOf('string'));

		//4 Найти положение второго пробела (“вручную” ничего не считать)
		var indexOfFirstSpace = string.indexOf(' ');
		console.log(string.indexOf(' ',indexOfFirstSpace + 1));

		//5 Получить строку с 5-го символа длиной 4 буквы
		console.log(string.substr(4,4));

		//6 Получить строку с 5-го по 9-й символы
		console.log(string.substr(4,(9-5+1)));

		//7 Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
		console.log(string.slice(0, string.length - 6));

		//8 Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
		var a = 20;
		var b = 16;

		var stringAB = a.toString() + b.toString();
		console.log(stringAB);





		//1 Получить число pi из Math и округлить его до 2-х знаков после точки
		const PI = Math.PI;
		console.log(PI.toFixed(2));

		//2 Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
		console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
		console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));

		//3 Работа с Math.random:
		//a. Получить случайное число и округлить его до двух цифр после запятой
		var randomNumber = Math.random();
		console.log(randomNumber);
		console.log(randomNumber.toFixed(2));

		//b. Получить случайное целое число от 0 до X. X - любое произвольное число.
		var min = 0;
		var max = 7;
		var randomLimited = 

		console.log(Math.round(Math.random() * (max - min) + min));

		//4 Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)? 
		var sum = 0.6 + 0.7;
		console.log(sum);
		console.log(sum.toFixed(1));

		//5 Получить число из строки ‘100$’
		var string100 = '100$';
		console.log(parseInt(string100));