document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d');

    //test
    context.fillRect(50, 50, 200, 100);

    ctx.font = '30px Arial';
    ctx.fillText('Does it work?', 50, 450);

    canvas.addEventListener('mousedown', (event) => {
        let rectangle = canvas.getBoundingClientRect();
        let x = event.clientX - rectangle.left;
        let y = event.clientY - rectangle.top;

        context.fillRect(x, y, 50, 50);
    });

    canvas.addEventListener('mouseover', (event) => {
        let rectangle = canvas.getBoundingClientRect();
        let x = event.clientX - rectangle.left;
        let y = event.clientY - rectangle.top;

        context.strokeRect(x, y, 50, 50);
    });

    
});