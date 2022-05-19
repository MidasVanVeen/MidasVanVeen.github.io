import Remarkable from './remarkable.min.js';

var projects_request: any = new Request('https://api.github.com/users/MidasVanVeen/starred?per_page=100');

const projects_div = document.getElementById("projects_div");

var fetched_data: any[] = [];

fetch(projects_request).then(resp => {
	resp.json().then(data => {
		fetched_data = data;
		for (let i = 0; i < data.length; i++) {
			if (projects_div != null) {
				projects_div.innerHTML += '<div onclick="maximize(\"' + data['name'] + '\"" class="project_item"><h1>' + data[i]['name'] + '</h1><p>' + data[i]['description'] + '</p></div>';
			}
		}
	});
});

function maximize(project_name: String) {
	if (fetched_data != []) {
		fetched_data.forEach(element => {
			if (element['name'] == project_name) {

				const md = new Remarkable();
				
				fetch(new Request("https://raw.githubusercontent.com/MidasVanVeen/" + project_name + "/main/README.md")).then(resp => {
					resp.text().then(READMEstring => {
						let projects_maxi_div = document.getElementById("projects_maxi");
						if (projects_maxi_div != null) {
							projects_maxi_div.innerHTML = md.render(READMEstring);
						}
					})
				});
			}
		});
	}
}