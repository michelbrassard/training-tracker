document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d');
    let startX;
    let startY;
    let endX;
    let endY;
    let clicked = false;
    let finished = false;
    

    function resizeCanvas() {
        let dpr = window.devicePixelRatio || 1;

        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;

        canvas.width = screenWidth * dpr;
        canvas.height = screenHeight * dpr;

        canvas.style.width = screenWidth + 'px';
        canvas.style.height = screenHeight + 'px';

        context.scale(dpr, dpr);

        draw();
    }
    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        //samo da znam da radi
        context.fillRect(50, 50, 20, 10);
    }
    function drawLine(x1, y1, x2, y2) {
        context.beginPath(); // Start a new path
        context.moveTo(x1, y1); // Move to the start point
        context.lineTo(x2, y2); // Draw a line to the end point
        context.strokeStyle = 'red'; // Line color
        context.lineWidth = 10; // Line width
        context.stroke(); // Render the line
    }

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    canvas.addEventListener('mousedown', (event) => {
        let rectangle = canvas.getBoundingClientRect();
        startX = event.clientX - rectangle.left;
        startY = event.clientY - rectangle.top;
        clicked = true;

    });

    canvas.addEventListener('mousemove', (event) => {
        let rectangle = canvas.getBoundingClientRect();
        let x = event.clientX - rectangle.left;
        let y = event.clientY - rectangle.top;
        
        if(finished) {
            return;
        }
        if(!clicked) {
            return;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.lineCap = 'round';
        drawLine(startX, startY, x, startY);

        let symbolicKilometers = (x - startX) * 10;
        
        context.font = '12px Arial';
        context.fillStyle = 'red'; 
        if(symbolicKilometers > 0) {
            context.fillText(symbolicKilometers, x - 10, startY + 20);
        }
        else {
            symbolicKilometers = symbolicKilometers * (-1);
            context.fillText(symbolicKilometers, startX - 10, startY + 20);
        }
        
    });

    canvas.addEventListener('mouseup', (event) => {
        clicked = false;
        finished = true;
    })

    
});

