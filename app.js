function spin() {
    if (document.getElementById("positionLocked").checked != true) {
        const select = document.getElementById("position");
        const randomIndex = Math.floor(Math.random() * select.options.length);
        if (select.value == randomIndex) {
            select.value = randomIndex + 1;
            if (select.value == select.options.length) {
                select.value--;
            }
        }
        else {
            select.value = randomIndex;
        }
    }
    if (document.getElementById("runnersLocked").checked != true) {
        const select = document.getElementById("runners");
        const randomIndex = Math.floor(Math.random() * select.options.length);
        if (select.value == randomIndex) {
            select.value = randomIndex + 1;
            if (select.value == select.options.length) {
                select.value--;
            }
        }
        else {
            select.value = randomIndex;
        }
    }
    if (document.getElementById("outsLocked").checked != true) {
        const select = document.getElementById("outs");
        const randomIndex = Math.floor(Math.random() * select.options.length);
        if (select.value == randomIndex) {
            select.value = randomIndex + 1;
            if (select.value == select.options.length) {
                select.value--;
            }
        }
        else {
            select.value = randomIndex;
        }
    }
}
