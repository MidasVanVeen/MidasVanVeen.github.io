"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const remarkable_min_js_1 = __importDefault(require("./remarkable.min.js"));
var projects_request = new Request('https://api.github.com/users/MidasVanVeen/starred?per_page=100');
const projects_div = document.getElementById("projects_div");
var fetched_data = [];
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
function maximize(project_name) {
    if (fetched_data != []) {
        fetched_data.forEach(element => {
            if (element['name'] == project_name) {
                const md = new remarkable_min_js_1.default();
                fetch(new Request("https://raw.githubusercontent.com/MidasVanVeen/" + project_name + "/main/README.md")).then(resp => {
                    resp.text().then(READMEstring => {
                        let projects_maxi_div = document.getElementById("projects_maxi");
                        if (projects_maxi_div != null) {
                            projects_maxi_div.innerHTML = md.render(READMEstring);
                        }
                    });
                });
            }
        });
    }
}
