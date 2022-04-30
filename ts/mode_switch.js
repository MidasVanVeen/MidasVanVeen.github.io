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
    var stylesheetLink = document.getElementById('pagestyle_dark');
    stylesheetLink.href = '/css/darkstyle.css';
    var msg = document.getElementById('darkmode_msg');
    if (msg != null) {
        msg.innerHTML = 'Click me for light mode';
    }
}
function setLightMode() {
    var stylesheetLink = document.getElementById('pagestyle_dark');
    stylesheetLink.href = '';
    var msg = document.getElementById('darkmode_msg');
    if (msg != null) {
        msg.innerHTML = 'Click me for dark mode';
    }
}
