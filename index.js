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
			if (this.arraysEqual(rightVariants, card.test.chosen)) {
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
			title: "Card 1",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Тут будет что-то...",
			test: {
				hint: "Подсказка",
				secretWord: "Секретное слово 1",
				type: "checkbox",
				question: "Выберите правильный ответ: ",
				chosen: [],
				variants: [
				{
					text: "A",
					right: true,
				},
				{
					text: "B",
					right: true,
				},
				{
					text: "C",
					right: true,
				},
				{
					text: "D",
					right: false,
				},
				{
					text: "E",
					right: false,
				}
				]
			}
		},
		{
			title: "Card 1",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Тут будет что-то...",
			test: {
				type: "radio",
				question: "Выберите правильный ответ: ",
				chosen: [],
				variants: [
				{
					text: "A",
					right: true,
				},
				{
					text: "B",
					right: false,
				},
				{
					text: "C",
					right: false,
				},
				{
					text: "D",
					right: false,
				},
				{
					text: "E",
					right: false,
				}
				]
			}
		},
		{
			title: "Card 1",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Тут будет что-то...",
		},
		{
			title: "Card 1",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Тут будет что-то...",
		},
		{
			title: "Card 1",
			content: "На этой станции вы должны ознакомиться с основами прохождения квеста",
			modalContent: "Тут будет что-то...",
		}
		]
	}
})
