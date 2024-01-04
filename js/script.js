// Урок 1. JavaScript. Что такое prototype. JavaScript Prototype (English Subs)
// const person = new Object({
// 	name: 'Maxim',
// 	age: 25,
// 	greet: function() {
// 		console.log('Greet!');
// 	}
// });

// Object.prototype.sayHello = function() {
// 	console.log('Hello!');
// };

// const lena = Object.create(person); //Найти на MDN, определение метода create
// lena.name = 'Elena'; // Прототип идет сверху вниз, если он на верхнем уровне находит какое-то поле или какую-то функцию он сразу же его вызывает. Но если он ничего не находит он обращается к прототипу и пытается в нем найти нужное поле и так далее.

// const strFirst = 'I am string';
// const str = new String('I am string');

// // Прототип - это некоторый объект с помощью которого мы расширяем свойства объектов или классов, с помощью него мы можем устраивать определенное наследование внутри JavaScript`а.


// Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters
const person = Object.create(
	{
	calculateAge() {
		console.log('Age', new Date().getFullYear() - this.birthYear);
	}	
	}, {
	name: {
		value: 'Vladilen',
		enumerable: true, // Параметры, которые являються PropertyDescriptor`ами - являються настройками для полей-свойств. Данное поле делает свойства-поля видимыми для цикла.
		writable: true, // Данное поле позволяет изменять значения полей-свойств, по умолчанию данная возможность отключена.
		configurable: true // Данное поле позволяет удалять наши свойства-ключи.
	},
	birthYear: {
		value: 1993,
		enumerable: false,
		writable: false,
		configurable: false
	},
	age: {
		get() {
			// return 'Hello!';
			return new Date().getFullYear() - this.birthYear;
		},
		set(value) { // Если мы задаем какое-то значение, любое, то поля выполняются, которые находяться внутри set.
			document.body.style.background = 'red';
			console.log('Set age', value);
		}
	}
});

// При открытие объекта person в консоли имена свойств подсвечиваються бледными цветами, это означает что при импользовании циклов данные свойства не будут итерироваться.


// person.name = 'Maxim';


for (let key in person) {
	if (person.hasOwnProperty(key)) { // Метод который дает возможность не пробегаться по прототипам объекта. Рекомендуется всегда к использованию при работе с циклом for in.
		console.log("Key ", key, person[key]);
	}
}