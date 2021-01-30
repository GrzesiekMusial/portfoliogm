export function blinking(index, arr) {
    if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    )
        return;

    const lArray = arr.slice(0, index).reverse();
    const rArray = arr.slice(index);

    const blink = (array) => {
        let ind = 0;

        const blinkInterval = setInterval(function () {
            try {
                document.getElementById(array[ind]).classList.add("alpha");
                clear(array, ind);
                ind++;
                if (array[ind] === undefined)
                    return clearInterval(blinkInterval);
            } catch (ex) {
                clearInterval(blinkInterval);
            }
        }, 150);
    };

    const clear = (arr, pos) => {
        setTimeout(function () {
            try {
                document.getElementById(arr[pos]).classList.remove("alpha");
            } catch (ex) {}
        }, Math.round(Math.random() * 1000));
    };

    if (index > 0) blink(lArray);
    blink(rArray);
}

export function indexMaker(indexA, errTitle, list) {
    const index = errTitle + indexA;
    list.push(index);
    return index;
}
