var projects_request: any = new Request('https://api.github.com/users/MidasVanVeen/repos');
var colab_projects_request: any = new Request('https://api.github.com/users/Pix4Devs/repos');

const projects_div = document.getElementById("projects_div");
const colab_projects_div = document.getElementById("colab_projects_div");

fetch(projects_request).then(resp => {
	resp.json().then(data => {
		for (let i = 0; i < data.length; i++) {
			if (projects_div != null) {
				projects_div.innerHTML += '<div onclick="window.location.href = \'' + data[i]['html_url'] + '\'" class="project_item"><h1>' + data[i]['name'] + '</h1><p>' + data[i]['description'] + '</p></div>';
			}
		}
	});
});

fetch(colab_projects_request).then(resp => {
	resp.json().then(data => {
		for (let i = 0; i < data.length; i++) {
			if (colab_projects_div != null) {
				colab_projects_div.innerHTML += '<div onclick="window.location.href = \'' + data[i]['html_url'] + '\'" class="project_item"><h1>' + data[i]['name'] + '</h1><p>' + data[i]['description'] + '</p></div>';
			}
		}
	});
});
