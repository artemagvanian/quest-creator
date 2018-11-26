var app = new Vue({
	el: '#app',
	mounted() {
		if (localStorage.stage) {
			this.stage = JSON.parse(localStorage.stage);
		}
		if (localStorage.completed) {
			this.completed = JSON.parse(localStorage.completed);
		}
		$(function () {
			$('[data-toggle="popover"]').popover({
				placement: 'left',
				trigger: 'focus'
			})
		})
	},
	watch: {
		stage(newStage) {
			localStorage.stage = newStage;
		},
		completed(newCompleted) {
			localStorage.completed = newCompleted;
		}
	},
	methods: {
		checkAnswers(card, cardId) {
			let rightVariants = card.test.variants.filter(variant => variant.right).map(variant => variant.text);

			if (this.arraysEqual(rightVariants, card.test.chosen) || rightVariants[0] == card.test.chosen) {
				this.stage = this.stage > (cardId + 1) ? this.stage : cardId + 1;
			}
		},
		arraysEqual(a, b) {
			if (a === b) return true;
			if (a == null || b == null) return false;
			if (a.length != b.length) return false;

			for (var i = 0; i < a.length; ++i) {
				if (a[i] !== b[i]) return false;
			}
			return true;
		},
		checkSortable(card, cardId) {
			if (card.sortable.variants.join(' ') === card.sortable.answer) {
				this.completed = true;
			}
		}
	},
	data: {
		stage: 0,
		completed: false,
		cards: [
		{
			title: "УЦРівська",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "За допомогою малюнку-підказки, визначте, про що йдеться мова",
			imageLink: "assets/img_0.jpg",
			test: {
				hint: "Третій універсал",
				secretWord: "Едет вся",
				type: "radio",
				question: "Виберіть правильну відповідь: ",
				chosen: [],
				variants: [
				{
					text: "Держава Скоропадського",
					right: false,
				},
				{
					text: "Директорія",
					right: false,
				},
				{
					text: "Проголошення УНР",
					right: true,
				},
				{
					text: "Деникінський режим",
					right: false,
				},
				{
					text: "Отоманщина",
					right: false,
				}
				]
			}
		}, 
		{
			title: "Більшовицька",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: `Назвіть дату й подію, про яку йдеться у документі: 
			"Ми всі гадаєм, що, безусловно, необхідний крайовий з'їзд рад робітничих, солдатських і 
			селянських депутатів. Ми не розуміємо того недовір'я, з яким тов. Порш відноситься до 
			ідеї такого з'їзду. На нашу гадку, взятися до скликання з'їзду повинні ви - кияни, одесці, 
			харківці, катеринославці й ін., звичайно, з Центральною Українською радою."`,
			test: {
				hint: "17.12.1917",
				secretWord: "а под",
				type: "radio",
				question: "Виберіть правильну відповідь: ",
				chosen: [],
				variants: [
				{
					text: "Перший всеукраїнський з'їзд рад у Харкові",
					right: true,
				},
				{
					text: "Засідання тимчасового уряду",
					right: false,
				},
				{
					text: "І військовий з'їзд",
					right: false,
				},
				{
					text: "Всеукраїнський хліборобський з'їзд",
					right: false,
				},
				{
					text: "Зібрання трудового конгресу",
					right: false,
				}
				]
			}
		},
		{
			title: "Гетьманська",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Назвіть орган влади, користуючись картинками.",
			imageLink: "assets/img_2.jpg",
			test: {
				hint: "29.04.1918",
				secretWord: "в вагон",
				type: "radio",
				question: "Виберіть правильну відповідь: ",
				chosen: [],
				variants: [
				{
					text: "ЗУНР",
					right: false,
				},
				{
					text: "УСРР",
					right: false,
				},
				{
					text: "УЦР",
					right: false,
				},
				{
					text: "Скоропадська держава",
					right: true,
				},
				{
					text: "Директорія",
					right: false,
				}
				]
			}
		},
		{
			title: "Левицька",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Назвіть дату події.",
			imageLink: "assets/img_3.jpg",
			test: {
				hint: "Створення ЗУНР",
				secretWord: "а территория",
				type: "radio",
				question: "Виберіть правильну відповідь: ",
				chosen: [],
				variants: [
				{
					text: "14.12.1918",
					right: false,
				},
				{
					text: "22.01.1918",
					right: false,
				},
				{
					text: "14.03.1917",
					right: false,
				},
				{
					text: "13.11.1918",
					right: true,
				},
				{
					text: "17.12.1917",
					right: false,
				}
				]
			}
		},
		{
			title: "Гуляйпільська",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Назвіть людину.",
			imageLink: "assets/img_4.jpg",
			test: {
				hint: "Гуляйпільський революційний штаб",
				secretWord: "вагоном директория",
				type: "radio",
				question: "Виберіть правильну відповідь: ",
				chosen: [],
				variants: [
				{
					text: "Л. Троцький",
					right: false,
				},
				{
					text: "В. Ульянов",
					right: false,
				},
				{
					text: "П. Скоропадський",
					right: false,
				},
				{
					text: "С. Петлюра",
					right: false,
				},
				{
					text: "Н. Махно",
					right: true,
				}
				]
			}
		},
		{
			title: "Павловська",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Назвіть дату події, яка проілюстрована нижче.",
			imageLink: "assets/img_5.jpg",
			test: {
				secretWord: "нём",
				type: "radio",
				question: "Виберіть правильну відповідь: ",
				chosen: [],
				variants: [
				{
					text: "Зречення Скоропадського",
					right: true,
				},
				{
					text: "З'їзд більшовиків",
					right: false,
				},
				{
					text: "Прийняття IV універсалу",
					right: false,
				},
				{
					text: "Перший зимовий похід українских військ",
					right: false,
				},
				{
					text: "Зібрання трудового конгресу",
					right: false,
				}
				]
			}
		},
		{
			title: "Кінцева",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Вітаю. У тебе вже є всі слова, а отже ти можеш скласти загадану	приказку.",
			sortable: {
				variants: ['Some', 'other', 'stuff'],
				answer: "Some other stuff",
			}
		},
		]
	}
})
