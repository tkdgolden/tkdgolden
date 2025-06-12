function spin() {
    if (document.getElementById("positionLocked").checked != true) {
        const select = document.getElementById("position");
        const randomIndex = Math.floor(Math.random() * select.options.length);
        select.value = randomIndex;
    }
    if (document.getElementById("runnersLocked").checked != true) {
        const select = document.getElementById("runners");
        const randomIndex = Math.floor(Math.random() * select.options.length);
        select.value = randomIndex;
    }
    if (document.getElementById("outsLocked").checked != true) {
        const select = document.getElementById("outs");
        const randomIndex = Math.floor(Math.random() * select.options.length);
        select.value = randomIndex;
    }
}
