type mode = "light" | "dark";

var mode: mode = "dark";
setDarkMode();
if (getCookie("mode") === "light") {
	mode = "light";
}

function toggleMode() {
	if (mode === 'light') {
		setDarkMode();
		mode = 'dark';
		setCookie("mode", "dark", 30);
	} else if (mode === 'dark') {
		setLightMode();
		mode = 'light';
		setCookie("mode", "light", 30);
	}
}

function setDarkMode() {
	let stylesheetLink = document.getElementById('pagestyle_dark') as HTMLLinkElement;
	stylesheetLink.href = '/css/darkstyle.css';
	let msg = document.getElementById('darkmode_msg');
	if (msg != null) {
		msg.innerHTML = 'Click me for light mode';
	}
}

function setLightMode() {
	let stylesheetLink = document.getElementById('pagestyle_dark') as HTMLLinkElement;
	stylesheetLink.href = '';
	let msg = document.getElementById('darkmode_msg');
	if (msg != null) {
		msg.innerHTML = 'Click me for dark mode';
	}
}

function getCookie(cname: string) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		  return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
