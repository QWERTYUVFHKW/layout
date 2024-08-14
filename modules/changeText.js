export function changeText(q) {
    if (q.matches) {
        const fact = document.querySelector('#textCh1')

        fact.textContent = 'GET STARTED'
    } else {
    }
}

const smallerWidth = window.matchMedia("(max-width: 768px)")

changeText(smallerWidth);

smallerWidth.addEventListener("change", function () {
    changeText(smallerWidth);
});
smallerWidth;




export function changeTex(q) {
    if (q.matches) {
        const fact = document.querySelector('#textCh2')

        fact.textContent = 'GET STARTED'
    } else {
    }
}

const smallerWidt = window.matchMedia("(max-width: 768px)")

changeTex(smallerWidt);

smallerWidth.addEventListener("change", function () {
    changeTex(smallerWidt);
});
smallerWidt