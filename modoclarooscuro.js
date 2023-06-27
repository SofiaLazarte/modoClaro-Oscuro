/*const dark = document.getElementById("dark");

function cambioColor()
{
    const colorElegido = (dark.checked) ? 'dark' : 'light'; //si el check esta marcado le asigno estilo dark sino el light, lo guardon en la constante
    document.documentElement.className = colorElegido + "-theme";
    localStorage.setItem("theme", colorElegido);
}

dark.addEventListener("change", cambioColor);

const colorGuardado = localStorage.getItem("theme");

if (colorGuardado)
{
    applyTheme(ColorGuardado);
    dark.checked = (ColorGuardado === 'dark');
}

if (colorGuardado) {
    themeSwitch.checked = (colorGuardado === 'dark');
    cambioColor();
}*/

const log = console.log,
toggleSwitch = document.getElementById('dark'),
currentTheme = localStorage.getItem('theme')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'light') {
        toggleSwitch.checked = false
    }
}

function switchTheme(e) {
    const color = (e.target.checked) ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', color)
    localStorage.setItem('theme', color)
}

toggleSwitch.addEventListener('change', switchTheme, false)