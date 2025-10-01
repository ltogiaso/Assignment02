let strLangCode = window.prompt("Enter a language code from the following [es, de, en , fr]: ");

if (strLangCode == "es") {
    console.log("Hello World translated in Spanish is: Hola Mundo.");
}
else if (strLangCode == "de") {
    console.log("Hello World translated in German is: Hallo Welt.");
}
else if (strLangCode == "fr") {
    console.log("Hello World translated in French is: Bonjour le Monde.");
}
else {
    console.log("Hello World in English is: Hello World.");
}