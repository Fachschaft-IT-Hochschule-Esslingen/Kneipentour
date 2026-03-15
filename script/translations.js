// standard language
const langs = ["ger", "eng"];
let lang_index = 0;

// init function gatting called once
init();


function init() {
    const langButton = document.getElementById("lang-button");
    langButton,addEventListener("click", () => onChangeLang());

    loadLang();
}

function onChangeLang() {
    lang_index++;
    if (lang_index >= langs.length) {lang_index = 0};

    const body = document.getElementById("body");
    const langText = document.getElementById("lang-text");
    body.removeChild(langText);

    loadLang();
}

function loadLang() {
    const file = "lang/" + langs[lang_index] + ".html";

    const body = document.getElementById("body");
    const text = document.createElement("div");
    text.setAttribute("id", "lang-text");

    fetch(file)
        .then(response => response.text())
        .then(respoText => text.innerHTML = respoText)
        .catch(err => console.error("Error while loading language", err));

    body.appendChild(text);
}