var app = new Vue({
	el: '#app',
	mounted() {
		if (localStorage.stage) {
			this.stage = localStorage.stage;
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
		}
	},
	data: {
		stage: 0,
		cards: [
		{
			title: "Станція 1",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "За допомогою малюнку-підказки, визначте, про що йдеться мова",
			test: {
				hint: "Третій універсал",
				secretWord: "1917",
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
					text: "Існування УНР",
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
			title: "Станція 2",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Назвіть дату і подію, про яку йде мова в документі",
			test: {
				hint: "Вигнали з Києва",
				secretWord: " — 1921",
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
			title: "Станція 2",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Назвіть дату і подію, про яку йде мова в документі",
			test: {
				hint: "Вигнали з Києва",
				secretWord: " — 1921",
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
		]
	}
})
