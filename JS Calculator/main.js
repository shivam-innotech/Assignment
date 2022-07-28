let screen = document.getElementById('input');
buttons = document.querySelectorAll('button');
let inp = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        btnTxt = e.target.innerText;
        if (btnTxt == 'C') {
            inp = "";
            input.value = inp;
        }
        else if (btnTxt == '=') {
            input.value = eval(inp);
        }
        else {
            inp += btnTxt;
            input.value = inp;
        }
    })
}

