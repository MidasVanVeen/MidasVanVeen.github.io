"use strict";
var mode = 'light';
function toggleMode() {
    if (mode === 'light') {
        setDarkMode();
        mode = 'dark';
    }
    else if (mode === 'dark') {
        setLightMode();
        mode = 'light';
    }
}
function setDarkMode() {
    let stylesheetLink = document.getElementById('pagestyle_dark');
    stylesheetLink.href = '/css/darkstyle.css';
    let msg = document.getElementById('darkmode_msg');
    if (msg != null) {
        msg.innerHTML = 'Click me for light mode';
    }
}
function setLightMode() {
    let stylesheetLink = document.getElementById('pagestyle_dark');
    stylesheetLink.href = '';
    let msg = document.getElementById('darkmode_msg');
    if (msg != null) {
        msg.innerHTML = 'Click me for dark mode';
    }
}
