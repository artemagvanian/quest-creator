var app = new Vue({
	el: '#app',
	mounted() {
		if (localStorage.stage) {
			this.stage = localStorage.stage;
		}
	},
	watch: {
		stage(newStage) {
			localStorage.stage = newStage;
		}
	},
	computed: {
		groupedCards() {
			return _.chunk(this.cards, 4)

		}
	},
	methods: {
		checkAnswers(card) {
			let rightVariants = card.test.variants.filter(variant => variant.right).map(variant => variant.text);
			if (this.arraysEqual(rightVariants, card.test.chosen)) {
				this.stage++;
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
			secretWord: "Секретное слово 1",
			test: {
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
			secretWord: "Секретное слово 2",
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
