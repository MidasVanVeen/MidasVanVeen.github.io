var projects_request: any = new Request('https://api.github.com/users/MidasVanVeen/starred?per_page=100');

const projects_div = document.getElementById("projects_div");

fetch(projects_request).then(resp => {
	resp.json().then(data => {
		for (let i = 0; i < data.length; i++) {
			if (projects_div != null) {
				projects_div.innerHTML += '<div onclick="window.location.href=\'' + data[i]['html_url'] + '\'" class="project_item"><h1>' + data[i]['name'] + '</h1><p>' + data[i]['description'] + '</p></div>';
			}
		}
	});
});

