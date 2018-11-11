$(".submitter").on('click', function () {
	let refferer = $(this).attr('data-ref');
	if($(`input[name='${refferer}']:checked`).attr('data-right') == "") {
		$(`p[data-ref=${refferer}]`).text("Угадали");
		localStorage.setItem(refferer, 'passed');
		redraw();
	}
	else {
		$(`p[data-ref=${refferer}]`).text("Не угадали");
	}
});

function redraw() {
	for (let i of $('.timeline__date')) {
		let refferer = $(i).attr('data-ref');
		if (localStorage.getItem(refferer) == 'passed') {
			$(i).css('background-color', 'green');
		}
		// else {
		// 	$(i).css('background-color', '#5c0120');
		// }
	}
}

redraw();