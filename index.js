const INPUT = document.getElementById('input');
const OUTPUT = document.getElementById('output');
const CLEAR_BTN = document.getElementById('clear');
const FILTER_BTN = document.getElementById('filter');

CLEAR_BTN.addEventListener('click', function () {
	INPUT.value = '';
	OUTPUT.value = '';
});

FILTER_BTN.addEventListener('click', function () {
	OUTPUT.value = Array.from(
		new Set(INPUT.value.replace(new RegExp('[\r\n]', 'gm'), ',').split(','))
	).toString();
});
