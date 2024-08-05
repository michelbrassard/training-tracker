document.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById('content');
    let button = document.getElementById('button');
    let input = document.getElementById('input-container');
    let textField = document.getElementById('input');
    let add = document.getElementById('add');
    let pop = document.getElementById('pop-up');

    

    button.addEventListener('mousedown', () => {
        input.style.display = "block";
    })

    document.getElementById('button-container').addEventListener('mouseenter', () => {
        pop.style.display = "block";
    });
    document.getElementById('button-container').addEventListener('mouseleave', () => {
        pop.style.display = "none";
    });

    add.addEventListener('mousedown', () => {
        content.insertAdjacentHTML('beforeend', `<p>${textField.value}</p>`);
        textField.value = "";
        input.style.display = "none";
    });


});