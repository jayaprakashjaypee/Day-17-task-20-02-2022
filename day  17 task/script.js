/* CREATING A ELEMENT TO SHOW THE OUTPUT */

let div = document.createElement('div');
div.setAttribute('id', 'div');
document.body.appendChild(div);

/* USING CALLBACKHELL TO DISPLAY THE VALUE */

let count = 10;
let india = (callbackhell) => {
    setTimeout(() => {
        if (count >= 1) {
            div.classList.add('display-1', 'fw-bolder', 'text-info');
            div.innerText = count;
        }
        if (count == 0) {
            div.classList.add('display-3', 'fw-bold', 'text-warning');
            div.innerText = "HAPPY INDEPENDENCE DAY";
            return
        }
        count--
        callbackhell(india)
    }, 1000)
}
const display = (callbackhell) => {
    callbackhell(display)
}
india(display);