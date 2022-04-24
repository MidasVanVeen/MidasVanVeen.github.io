var projects_request = new Request('https://api.github.com/users/MidasVanVeen/starred?per_page=100');

const div = document.getElementById("projects_div");

fetch(projects_request).then(resp => {
	resp.json().then(data => {
		for (let i = 0; i < data.length; i++) {
			projects_div.innerHTML += '<div class="project_item"><h1>' + data[i]['name'] + '</h1><p>' + data[i]['description'] + '</p></div>';
		}
	});
});

var mode = 'light';

function toggleMode() {
	if (mode === 'light') {
		setDarkMode();
		mode = 'dark';
	} else if (mode === 'dark') {
		setLightMode();
		mode = 'light';
	}
}

function setDarkMode() {
	document.getElementById('pagestyle_dark').href = '/css/darkstyle.css';
	document.getElementById('darkmode_msg').innerHTML = 'click me for light mode';
}

function setLightMode() {
	document.getElementById('pagestyle_dark').href = '';
	document.getElementById('darkmode_msg').innerHTML = 'click me for dark mode';
}
